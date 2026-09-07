import { useRef, type PointerEvent as ReactPointerEvent, type RefObject } from "react"
import { Art } from "./Art"
import { clampItem } from "./model"
import type { Doc, FlowerItem } from "./types"

type Mode = "move" | "size" | "rot"

type Drag = {
    mode: Mode
    point: { x: number; y: number }
    doc: Doc
    ids: string[]
    dist?: number
    angle?: number
}

type Props = {
    doc: Doc
    sel: string[]
    svgRef: RefObject<SVGSVGElement | null>
    setSel: (ids: string[]) => void
    begin: () => void
    live: (doc: Doc) => void
    end: () => void
}

function point(svg: SVGSVGElement, event: ReactPointerEvent) {
    const matrix = svg.getScreenCTM()
    if (!matrix) return { x: 0, y: 0 }
    const value = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
    return { x: value.x, y: value.y }
}

function angle(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.atan2(a.y - b.y, a.x - b.x) * 180 / Math.PI
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.hypot(a.x - b.x, a.y - b.y)
}

function norm(deg: number) {
    return ((deg % 360) + 360) % 360
}

function groupBox(items: FlowerItem[]) {
    if (!items.length) return null
    const left = Math.min(...items.map((item) => item.x - item.size / 2))
    const top = Math.min(...items.map((item) => item.y - item.size / 2))
    const right = Math.max(...items.map((item) => item.x + item.size / 2))
    const bottom = Math.max(...items.map((item) => item.y + item.size / 2))
    return { left, top, right, bottom }
}

export function EditorCanvas({ doc, sel, svgRef, setSel, begin, live, end }: Props) {
    const drag = useRef<Drag | null>(null)
    const selected = doc.items.filter((item) => sel.includes(item.id) && !item.hidden)
    const single = selected.length === 1 ? selected[0]! : null
    const box = selected.length > 1 ? groupBox(selected) : null
    const handle = Math.max(14, Math.min(doc.canvas.w, doc.canvas.h) / 58)

    function capture(event: ReactPointerEvent<SVGElement>) {
        svgRef.current?.setPointerCapture(event.pointerId)
    }

    function startMove(event: ReactPointerEvent<SVGGElement>, id: string) {
        event.preventDefault()
        event.stopPropagation()
        const add = event.shiftKey || event.metaKey || event.ctrlKey

        if (add) {
            setSel(sel.includes(id) ? sel.filter((value) => value !== id) : [...sel, id])
            return
        }

        const ids = sel.includes(id) ? sel : [id]
        if (!sel.includes(id)) setSel(ids)
        const svg = svgRef.current
        if (!svg) return
        begin()
        drag.current = { mode: "move", point: point(svg, event), doc, ids }
        capture(event)
    }

    function startHandle(event: ReactPointerEvent<SVGCircleElement>, mode: "size" | "rot") {
        event.preventDefault()
        event.stopPropagation()
        const svg = svgRef.current
        if (!svg || !single) return
        const at = point(svg, event)
        begin()
        drag.current = {
            mode,
            point: at,
            doc,
            ids: [single.id],
            dist: distance(at, single),
            angle: angle(at, single),
        }
        capture(event)
    }

    function move(event: ReactPointerEvent<SVGSVGElement>) {
        const state = drag.current
        const svg = svgRef.current
        if (!state || !svg) return
        event.preventDefault()
        const at = point(svg, event)

        if (state.mode === "move") {
            const dx = at.x - state.point.x
            const dy = at.y - state.point.y
            live({
                ...state.doc,
                items: state.doc.items.map((item) => state.ids.includes(item.id)
                    ? clampItem({ ...item, x: item.x + dx, y: item.y + dy }, state.doc.canvas)
                    : item),
            })
            return
        }

        const item = state.doc.items.find((value) => value.id === state.ids[0])
        if (!item) return

        if (state.mode === "size") {
            const ratio = distance(at, item) / Math.max(1, state.dist ?? 1)
            const limit = Math.max(state.doc.canvas.w, state.doc.canvas.h) * 2
            const size = Math.min(limit, Math.max(40, item.size * ratio))
            live({
                ...state.doc,
                items: state.doc.items.map((value) => value.id === item.id
                    ? clampItem({ ...value, size }, state.doc.canvas)
                    : value),
            })
            return
        }

        let rot = item.rot + angle(at, item) - (state.angle ?? 0)
        if (event.shiftKey) rot = Math.round(rot / 15) * 15
        live({
            ...state.doc,
            items: state.doc.items.map((value) => value.id === item.id ? { ...value, rot: norm(rot) } : value),
        })
    }

    function finish(event: ReactPointerEvent<SVGSVGElement>) {
        if (!drag.current) return
        drag.current = null
        if (svgRef.current?.hasPointerCapture(event.pointerId)) {
            svgRef.current.releasePointerCapture(event.pointerId)
        }
        end()
    }

    function empty(event: ReactPointerEvent<SVGSVGElement>) {
        const target = event.target as Element
        if (!target.closest("[data-flower-id], [data-handle]")) setSel([])
    }

    return (
        <svg
            ref={svgRef}
            className="ed-art"
            viewBox={`0 0 ${doc.canvas.w} ${doc.canvas.h}`}
            width="100%"
            height="100%"
            role="application"
            aria-label="Wallpaper canvas. Select flowers to move, resize, or rotate them."
            onPointerDown={empty}
            onPointerMove={move}
            onPointerUp={finish}
            onPointerCancel={finish}
        >
            <Art doc={doc} onItemDown={startMove} />

            <g data-export-ignore="true" className="ed-selection" aria-hidden="true">
                {single && (
                    <g transform={`translate(${single.x} ${single.y}) rotate(${single.rot})`}>
                        <rect
                            x={-single.size / 2}
                            y={-single.size / 2}
                            width={single.size}
                            height={single.size}
                            rx={handle * 0.3}
                            className="ed-selection-box"
                        />
                        <line
                            x1="0"
                            y1={-single.size / 2}
                            x2="0"
                            y2={-single.size / 2 - handle * 2.1}
                            className="ed-selection-line"
                        />
                        <circle
                            data-handle="rotate"
                            cx="0"
                            cy={-single.size / 2 - handle * 2.3}
                            r={handle}
                            className="ed-handle ed-rotate-handle"
                            onPointerDown={(event) => startHandle(event, "rot")}
                        />
                        <circle
                            data-handle="resize"
                            cx={single.size / 2}
                            cy={single.size / 2}
                            r={handle}
                            className="ed-handle ed-size-handle"
                            onPointerDown={(event) => startHandle(event, "size")}
                        />
                    </g>
                )}
                {box && (
                    <rect
                        x={box.left}
                        y={box.top}
                        width={box.right - box.left}
                        height={box.bottom - box.top}
                        rx={handle * 0.3}
                        className="ed-selection-box ed-selection-group"
                    />
                )}
            </g>
        </svg>
    )
}
