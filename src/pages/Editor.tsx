import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent, type RefObject } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import Brand from "../components/Brand"
import { Icon } from "../components/Icons"
import { ThemeToggle } from "../theme"
import { FLOWER_IDS, FLOWER_MAP } from "../flowers"
import type { FlowerId } from "../flowers"
import { Controls, type ControlActions, type LayerMove } from "../editor/Controls"
import { EditorCanvas } from "../editor/EditorCanvas"
import { exportArt, type ExportType } from "../editor/export"
import { generate, overlapHigh, stylesMixed } from "../editor/generate"
import { canRedo, canUndo, commit, makeHistory, redo, replace, undo, type Hist } from "../editor/history"
import { clampItem, makeDoc, parseDoc, sameDoc } from "../editor/model"
import type { Doc, FlowerItem } from "../editor/types"
import "./Editor.css"

const DOC_KEY = "flowchart-document-v1"
const PANEL_KEY = "flowchart-panel-width"

type Gesture = "idle" | "first" | "live"

function savedDoc() {
    try {
        return parseDoc(window.localStorage.getItem(DOC_KEY)) ?? makeDoc(FLOWER_IDS)
    } catch {
        return makeDoc(FLOWER_IDS)
    }
}

function savedPanel() {
    try {
        const value = Number(window.localStorage.getItem(PANEL_KEY))
        return Number.isFinite(value) ? Math.min(560, Math.max(320, value)) : 390
    } catch {
        return 390
    }
}

function uid() {
    return typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `flower-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

function editingTarget(target: EventTarget | null) {
    return target instanceof Element && Boolean(target.closest("input, textarea, select, [contenteditable='true']"))
}

function fitSize(host: HTMLElement, ratio: number) {
    const pad = window.innerWidth <= 820 ? 24 : 64
    const aw = Math.max(120, host.clientWidth - pad)
    const ah = Math.max(120, host.clientHeight - pad)
    if (aw / ah > ratio) return { w: ah * ratio, h: ah }
    return { w: aw, h: aw / ratio }
}

function useCanvasFit(host: RefObject<HTMLElement | null>, ratio: number) {
    const [fit, setFit] = useState({ w: 640, h: 420 })

    useEffect(() => {
        const node = host.current
        if (!node) return
        const update = () => setFit(fitSize(node, ratio))
        const observer = new ResizeObserver(update)
        observer.observe(node)
        window.addEventListener("resize", update)
        update()
        return () => {
            observer.disconnect()
            window.removeEventListener("resize", update)
        }
    }, [host, ratio])

    return fit
}

function moveLayers(doc: Doc, ids: string[], move: LayerMove) {
    const picked = new Set(ids)
    let items = [...doc.items]

    if (move === "front") {
        items = [...items.filter((item) => !picked.has(item.id)), ...items.filter((item) => picked.has(item.id))]
    } else if (move === "back") {
        items = [...items.filter((item) => picked.has(item.id)), ...items.filter((item) => !picked.has(item.id))]
    } else if (move === "forward") {
        for (let i = items.length - 2; i >= 0; i -= 1) {
            if (picked.has(items[i]!.id) && !picked.has(items[i + 1]!.id)) {
                ;[items[i], items[i + 1]] = [items[i + 1]!, items[i]!]
            }
        }
    } else {
        for (let i = 1; i < items.length; i += 1) {
            if (picked.has(items[i]!.id) && !picked.has(items[i - 1]!.id)) {
                ;[items[i], items[i - 1]] = [items[i - 1]!, items[i]!]
            }
        }
    }

    return { ...doc, items }
}

function Editor() {
    const reduceMotion = useReducedMotion()
    const [hist, setHist] = useState<Hist<Doc>>(() => makeHistory(savedDoc()))
    const [sel, setSel] = useState<string[]>([])
    const [panel, setPanel] = useState(savedPanel)
    const [toast, setToast] = useState("")
    const [saving, setSaving] = useState<ExportType | null>(null)
    const [exportOpen, setExportOpen] = useState(false)
    const [matte, setMatte] = useState("#f7f3ea")
    const [saveOk, setSaveOk] = useState(true)
    const gesture = useRef<Gesture>("idle")
    const clip = useRef<FlowerItem[]>([])
    const svgRef = useRef<SVGSVGElement>(null)
    const stageRef = useRef<HTMLElement>(null)
    const discardRef = useRef<HTMLDialogElement>(null)
    const exportRef = useRef<HTMLDialogElement>(null)
    const exportButtonRef = useRef<HTMLButtonElement>(null)
    const toastTimer = useRef<number | null>(null)
    const doc = hist.now
    const fit = useCanvasFit(stageRef, doc.canvas.w / doc.canvas.h)

    const note = useCallback((text: string) => {
        setToast(text)
        if (toastTimer.current) window.clearTimeout(toastTimer.current)
        toastTimer.current = window.setTimeout(() => setToast(""), 3200)
    }, [])

    useEffect(() => () => {
        if (toastTimer.current) window.clearTimeout(toastTimer.current)
    }, [])

    useEffect(() => {
        document.title = "Flowchart Studio — Flower wallpaper editor"
    }, [])

    useEffect(() => {
        const timer = window.setTimeout(() => {
            try {
                window.localStorage.setItem(DOC_KEY, JSON.stringify(doc))
                setSaveOk(true)
            } catch {
                setSaveOk(false)
            }
        }, 180)
        return () => window.clearTimeout(timer)
    }, [doc])

    useEffect(() => {
        try { window.localStorage.setItem(PANEL_KEY, String(panel)) } catch { /* preference remains session-only */ }
    }, [panel])

    useEffect(() => {
        const close = (event: PointerEvent) => {
            const dialog = exportRef.current
            const target = event.target as Node
            if (dialog?.open && !dialog.contains(target) && !exportButtonRef.current?.contains(target)) {
                dialog.close()
                setExportOpen(false)
            }
        }
        document.addEventListener("pointerdown", close)
        return () => document.removeEventListener("pointerdown", close)
    }, [])

    const change = useCallback((next: Doc) => {
        gesture.current = "idle"
        setHist((value) => commit(value, next, sameDoc))
    }, [])

    const begin = useCallback(() => {
        gesture.current = "first"
    }, [])

    const live = useCallback((next: Doc) => {
        setHist((value) => {
            if (gesture.current === "first") {
                gesture.current = "live"
                return commit(value, next, sameDoc)
            }
            return gesture.current === "live"
                ? replace(value, next, sameDoc)
                : commit(value, next, sameDoc)
        })
    }, [])

    const end = useCallback(() => {
        gesture.current = "idle"
    }, [])

    const add = useCallback((asset: FlowerId) => {
        const size = Math.min(doc.canvas.w, doc.canvas.h) * 0.27
        const shift = ((doc.items.length % 5) - 2) * size * 0.1
        const item = clampItem({
            id: uid(),
            asset,
            x: doc.canvas.w / 2 + shift,
            y: doc.canvas.h / 2 + shift,
            size,
            rot: (doc.items.length * 23) % 360,
            colors: [...FLOWER_MAP[asset].colors],
            hidden: false,
        }, doc.canvas)
        change({ ...doc, items: [...doc.items, item] })
        setSel([item.id])
    }, [change, doc])

    const randomize = useCallback(() => {
        change(generate(doc))
        setSel([])
        note("A new editable composition is ready.")
    }, [change, doc, note])

    const duplicate = useCallback(() => {
        const picked = doc.items.filter((item) => sel.includes(item.id))
        if (!picked.length) return
        const copies = picked.map((item) => clampItem({
            ...item,
            colors: [...item.colors],
            id: uid(),
            x: item.x + 24,
            y: item.y + 24,
            hidden: false,
        }, doc.canvas))
        change({ ...doc, items: [...doc.items, ...copies] })
        setSel(copies.map((item) => item.id))
    }, [change, doc, sel])

    const remove = useCallback(() => {
        if (!sel.length) return
        const count = sel.length
        change({ ...doc, items: doc.items.filter((item) => !sel.includes(item.id)) })
        setSel([])
        note(`${count === 1 ? "Flower" : `${count} flowers`} deleted.`)
    }, [change, doc, note, sel])

    const moveLayer = useCallback((move: LayerMove) => {
        if (sel.length) change(moveLayers(doc, sel, move))
    }, [change, doc, sel])

    const copy = useCallback(() => {
        clip.current = doc.items.filter((item) => sel.includes(item.id)).map((item) => ({ ...item, colors: [...item.colors] }))
        if (clip.current.length) note(`${clip.current.length === 1 ? "Flower" : `${clip.current.length} flowers`} copied.`)
    }, [doc.items, note, sel])

    const paste = useCallback(() => {
        if (!clip.current.length) return
        const copies = clip.current.map((item, index) => clampItem({
            ...item,
            id: uid(),
            x: item.x + 28 + index * 4,
            y: item.y + 28 + index * 4,
            colors: [...item.colors],
            hidden: false,
        }, doc.canvas))
        change({ ...doc, items: [...doc.items, ...copies] })
        setSel(copies.map((item) => item.id))
    }, [change, doc])

    const undoDoc = useCallback(() => {
        gesture.current = "idle"
        setHist((value) => undo(value))
        setSel([])
    }, [])

    const redoDoc = useCallback(() => {
        gesture.current = "idle"
        setHist((value) => redo(value))
        setSel([])
    }, [])

    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (discardRef.current?.open || editingTarget(event.target)) return
            const mod = event.ctrlKey || event.metaKey
            const key = event.key.toLowerCase()

            if (event.key === "Escape") {
                if (exportRef.current?.open) {
                    exportRef.current.close()
                    setExportOpen(false)
                }
                setSel([])
                return
            }
            if (mod && key === "z") {
                event.preventDefault()
                if (event.shiftKey) redoDoc()
                else undoDoc()
                return
            }
            if (event.ctrlKey && key === "y") {
                event.preventDefault(); redoDoc(); return
            }
            if (mod && key === "d") {
                if (sel.length) { event.preventDefault(); duplicate() }
                return
            }
            if (mod && key === "c") {
                if (sel.length) { event.preventDefault(); copy() }
                return
            }
            if (mod && key === "v") {
                if (clip.current.length) { event.preventDefault(); paste() }
                return
            }
            if (mod && key === "a") {
                event.preventDefault()
                setSel(doc.items.filter((item) => !item.hidden).map((item) => item.id))
                return
            }
            if ((event.key === "Delete" || event.key === "Backspace") && sel.length) {
                event.preventDefault(); remove(); return
            }
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key) && sel.length) {
                event.preventDefault()
                const step = event.shiftKey ? 10 : 1
                const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0
                const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0
                change({ ...doc, items: doc.items.map((item) => sel.includes(item.id) ? clampItem({ ...item, x: item.x + dx, y: item.y + dy }, doc.canvas) : item) })
            }
        }

        window.addEventListener("keydown", keydown)
        return () => window.removeEventListener("keydown", keydown)
    }, [change, copy, doc, duplicate, paste, redoDoc, remove, sel, undoDoc])

    const act = useMemo<ControlActions>(() => ({
        change,
        begin,
        live,
        end,
        add,
        generate: randomize,
        select: setSel,
        duplicate,
        remove,
        moveLayer,
        note,
    }), [add, begin, change, duplicate, end, live, moveLayer, note, randomize, remove])

    function startPanel(event: ReactPointerEvent<HTMLDivElement>) {
        if (window.innerWidth <= 820) return
        event.preventDefault()
        const start = event.clientX
        const width = panel
        const move = (next: PointerEvent) => {
            const max = Math.min(560, window.innerWidth * 0.48)
            setPanel(Math.round(Math.min(max, Math.max(320, width + start - next.clientX))))
        }
        const stop = () => {
            window.removeEventListener("pointermove", move)
            window.removeEventListener("pointerup", stop)
        }
        window.addEventListener("pointermove", move)
        window.addEventListener("pointerup", stop, { once: true })
    }

    function panelKey(event: ReactKeyboardEvent<HTMLDivElement>) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
        event.preventDefault()
        const step = event.shiftKey ? 32 : 12
        setPanel((value) => Math.min(560, Math.max(320, value + (event.key === "ArrowLeft" ? step : -step))))
    }

    function openDiscard() {
        discardRef.current?.showModal()
    }

    function discard() {
        const blank = makeDoc(FLOWER_IDS)
        setHist(makeHistory(blank))
        setSel([])
        discardRef.current?.close()
        note("The design was reset to a blank canvas.")
    }

    function toggleExport() {
        const dialog = exportRef.current
        if (!dialog) return
        if (dialog.open) {
            dialog.close()
            setExportOpen(false)
        }
        else {
            dialog.show()
            setExportOpen(true)
            window.setTimeout(() => dialog.querySelector<HTMLButtonElement>("button")?.focus(), 0)
        }
    }

    async function download(type: ExportType) {
        if (!svgRef.current || saving) return
        setSaving(type)
        try {
            await exportArt(svgRef.current, doc, type, matte)
            exportRef.current?.close()
            setExportOpen(false)
            note(`${type.toUpperCase()} export started.`)
        } catch (error) {
            note(error instanceof Error ? error.message : "Export failed. Please try again.")
        } finally {
            setSaving(null)
        }
    }

    const workStyle = { "--panel-w": `${panel}px` } as CSSProperties
    const canvasStyle = { width: `${fit.w}px`, height: `${fit.h}px` }

    return (
        <motion.main className="ed-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.22 }}>
            <header className="ed-head">
                <Link to="/" className="ed-logo" aria-label="Flowchart home"><Brand /></Link>
                <div className="ed-head-actions">
                    <ThemeToggle className="ed-tool-btn" />
                    <button className="ed-tool-btn" type="button" onClick={undoDoc} disabled={!canUndo(hist)} aria-label="Undo" title="Undo (Ctrl/Cmd+Z)"><Icon name="undo" /></button>
                    <button className="ed-tool-btn" type="button" onClick={redoDoc} disabled={!canRedo(hist)} aria-label="Redo" title="Redo (Ctrl/Cmd+Shift+Z)"><Icon name="redo" /></button>
                    <button className="ed-tool-btn" type="button" onClick={openDiscard} aria-label="Discard design" title="Discard design"><Icon name="trash" /></button>
                    <button ref={exportButtonRef} className="ed-export-btn" type="button" onClick={toggleExport} aria-haspopup="dialog" aria-expanded={exportOpen}>
                        <Icon name="download" /><span>Export</span><Icon name="chevron-down" />
                    </button>
                </div>
            </header>

            <div className="ed-work" style={workStyle}>
                <section ref={stageRef} className="ed-stage" aria-label="Canvas workspace">
                    <div className={`ed-canvas-frame ${doc.bg.kind === "transparent" ? "is-transparent" : ""}`} style={canvasStyle}>
                        <EditorCanvas doc={doc} sel={sel} svgRef={svgRef} setSel={setSel} begin={begin} live={live} end={end} />
                        {!doc.items.length && <div className="ed-canvas-empty" data-export-ignore="true"><Icon name="flower" /><strong>Your canvas is ready</strong><span>Add a flower or randomize a composition.</span></div>}
                    </div>
                    <div className="ed-stage-meta" aria-live="polite">
                        <span>{doc.canvas.w} × {doc.canvas.h}px</span>
                        <span className={saveOk ? "is-saved" : "is-error"}>{saveOk ? "Saved locally" : "Autosave unavailable"}</span>
                    </div>
                    <div className="ed-warnings">
                        {stylesMixed(doc) && <div className="ed-warning"><Icon name="warning" />Mixed styles can feel less consistent.</div>}
                        {overlapHigh(doc) && <div className="ed-warning"><Icon name="warning" />Dense overlap may reduce readability.</div>}
                    </div>
                </section>

                <div
                    className="ed-resizer"
                    role="separator"
                    aria-label="Resize control panel"
                    aria-orientation="vertical"
                    aria-valuemin={320}
                    aria-valuemax={560}
                    aria-valuenow={panel}
                    tabIndex={0}
                    onPointerDown={startPanel}
                    onKeyDown={panelKey}
                ><span /></div>

                <aside className="ed-panel" aria-label="Editor controls">
                    <Controls doc={doc} sel={sel} act={act} />
                </aside>
            </div>

            <dialog ref={exportRef} className="ed-export-menu" aria-labelledby="export-title" onClose={() => setExportOpen(false)}>
                <div className="ed-dialog-head"><div><span className="ed-eyebrow">Download</span><h2 id="export-title">Export artwork</h2></div><button type="button" className="ed-icon-btn" onClick={() => { exportRef.current?.close(); setExportOpen(false) }} aria-label="Close export menu"><Icon name="close" /></button></div>
                <button type="button" className="ed-format" onClick={() => download("jpg")} disabled={Boolean(saving)}>
                    <span className="ed-format-icon is-jpg"><Icon name="file-image" /></span><span><strong>JPG</strong><small>Compact, opaque image for sharing and wallpapers.</small></span><Icon name="chevron-right" />
                </button>
                <button type="button" className="ed-format" onClick={() => download("png")} disabled={Boolean(saving)}>
                    <span className="ed-format-icon is-png"><Icon name="image" /></span><span><strong>PNG</strong><small>High-quality image with optional transparency.</small></span><Icon name="chevron-right" />
                </button>
                <button type="button" className="ed-format" onClick={() => download("svg")} disabled={Boolean(saving)}>
                    <span className="ed-format-icon is-svg"><Icon name="file-code" /></span><span><strong>SVG</strong><small>Scalable vector artwork for editing or the web.</small></span><Icon name="chevron-right" />
                </button>
                <label className="ed-matte"><span>JPG transparency matte</span><span><input type="color" value={matte} onChange={(event) => setMatte(event.target.value)} /><code>{matte.toUpperCase()}</code></span></label>
                {saving && <p className="ed-export-status" role="status">Preparing {saving.toUpperCase()}…</p>}
            </dialog>

            <dialog ref={discardRef} className="ed-confirm" aria-labelledby="discard-title">
                <div className="ed-confirm-icon"><Icon name="trash" /></div>
                <h2 id="discard-title">Discard this design?</h2>
                <p>All flowers and canvas changes in the current design will be removed. This cannot be undone.</p>
                <div className="ed-confirm-actions">
                    <button type="button" className="ed-soft-btn" onClick={() => discardRef.current?.close()}>Cancel</button>
                    <button type="button" className="ed-danger-btn" onClick={discard}>Discard design</button>
                </div>
            </dialog>

            <div className={`ed-toast ${toast ? "is-visible" : ""}`} role="status" aria-live="polite"><Icon name="check" />{toast}</div>
        </motion.main>
    )
}

export default Editor
