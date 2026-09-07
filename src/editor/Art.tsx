import { useId, type PointerEvent as ReactPointerEvent } from "react"
import { FlowerArt, FLOWER_MAP } from "../flowers"
import type { Doc, FlowerItem, PatternId } from "./types"

type ArtProps = {
    doc: Doc
    onItemDown?: (event: ReactPointerEvent<SVGGElement>, id: string) => void
}

function PatternArt({ id, unit, ink, opacity }: {
    id: PatternId
    unit: number
    ink: string
    opacity: number
}) {
    if (id === "dots") {
        return (
            <g fill={ink} opacity={opacity}>
                <circle cx={unit * 0.2} cy={unit * 0.2} r={unit * 0.07} />
                <circle cx={unit * 0.7} cy={unit * 0.66} r={unit * 0.04} />
            </g>
        )
    }

    if (id === "trellis") {
        return (
            <g fill="none" stroke={ink} strokeWidth={Math.max(1.5, unit * 0.035)} opacity={opacity}>
                <path d={`M0 ${unit * 0.5} Q${unit * 0.25} 0 ${unit * 0.5} ${unit * 0.5} T${unit} ${unit * 0.5}`} />
                <path d={`M${unit * 0.5} 0 Q${unit} ${unit * 0.25} ${unit * 0.5} ${unit * 0.5} T${unit * 0.5} ${unit}`} />
            </g>
        )
    }

    return (
        <g fill={ink} opacity={opacity}>
            <path d={`M${unit * 0.5} ${unit * 0.5} C${unit * 0.2} ${unit * 0.42} ${unit * 0.12} ${unit * 0.12} ${unit * 0.5} ${unit * 0.08} C${unit * 0.88} ${unit * 0.12} ${unit * 0.8} ${unit * 0.42} ${unit * 0.5} ${unit * 0.5}Z`} />
            <circle cx={unit * 0.5} cy={unit * 0.5} r={unit * 0.055} />
        </g>
    )
}

function Bg({ doc, prefix }: { doc: Doc; prefix: string }) {
    const { bg, canvas } = doc

    if (bg.kind === "transparent") return null

    if (bg.kind === "solid") {
        return <rect width={canvas.w} height={canvas.h} fill={bg.color} />
    }

    if (bg.kind === "gradient") {
        const id = `${prefix}-gradient`
        return (
            <>
                <defs>
                    <linearGradient id={id} x1="0" y1="0.5" x2="1" y2="0.5" gradientTransform={`rotate(${bg.angle} .5 .5)`}>
                        <stop offset="0" stopColor={bg.a} />
                        <stop offset="1" stopColor={bg.b} />
                    </linearGradient>
                </defs>
                <rect width={canvas.w} height={canvas.h} fill={`url(#${id})`} />
            </>
        )
    }

    const id = `${prefix}-pattern`
    const unit = 88 * bg.scale

    return (
        <>
            <defs>
                <pattern id={id} width={unit} height={unit} patternUnits="userSpaceOnUse">
                    <PatternArt id={bg.id} unit={unit} ink={bg.ink} opacity={bg.opacity} />
                </pattern>
            </defs>
            <rect width={canvas.w} height={canvas.h} fill={bg.base} />
            <rect width={canvas.w} height={canvas.h} fill={`url(#${id})`} />
        </>
    )
}

export function ItemArt({ item, onDown }: {
    item: FlowerItem
    onDown?: (event: ReactPointerEvent<SVGGElement>, id: string) => void
}) {
    if (item.hidden || !FLOWER_MAP[item.asset]) return null

    return (
        <g
            data-flower-id={item.id}
            aria-label={`${FLOWER_MAP[item.asset].name} flower`}
            className={onDown ? "ed-flower" : undefined}
            transform={`translate(${item.x} ${item.y}) rotate(${item.rot}) translate(${-item.size / 2} ${-item.size / 2}) scale(${item.size / 512})`}
            onPointerDown={onDown ? (event) => onDown(event, item.id) : undefined}
        >
            <FlowerArt id={item.asset} colors={item.colors} />
        </g>
    )
}

export function Art({ doc, onItemDown }: ArtProps) {
    const prefix = useId().replace(/:/g, "")

    return (
        <>
            <Bg doc={doc} prefix={prefix} />
            <g data-art-items="true">
                {doc.items.map((item) => (
                    <ItemArt key={item.id} item={item} onDown={onItemDown} />
                ))}
            </g>
        </>
    )
}
