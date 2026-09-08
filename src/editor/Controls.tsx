import { useId, useState, type ReactNode } from "react"
import {
    FlowerArt,
    FLOWERS,
    FLOWER_MAP,
    FLOWER_SPECIES,
    FLOWER_SPECIES_NAMES,
    FLOWER_STYLES,
    FLOWER_STYLE_DETAILS,
} from "../flowers"
import type { FlowerId, FlowerSpecies, FlowerStyle } from "../flowers"
import { Icon, type IconName } from "../components/Icons"
import { MAX_PIXELS, MAX_SIDE, MIN_SIDE, clampItem, resizeDoc, sizeError } from "./model"
import type { Bg, Doc, FlowerItem, PatternId, Ratio } from "./types"

export type LayerMove = "front" | "forward" | "backward" | "back"

export type ControlActions = {
    change: (next: Doc) => void
    begin: () => void
    live: (next: Doc) => void
    end: () => void
    add: (id: FlowerId) => void
    generate: () => void
    select: (ids: string[]) => void
    duplicate: () => void
    remove: () => void
    moveLayer: (move: LayerMove) => void
    note: (text: string) => void
}

type Props = {
    doc: Doc
    sel: string[]
    act: ControlActions
}

const PRESETS: { id: Ratio; label: string; hint: string; w: number; h: number }[] = [
    { id: "16:9", label: "16:9", hint: "Desktop", w: 1920, h: 1080 },
    { id: "9:16", label: "9:16", hint: "Phone", w: 1080, h: 1920 },
    { id: "4:3", label: "4:3", hint: "Tablet", w: 2048, h: 1536 },
    { id: "1:1", label: "1:1", hint: "Square", w: 1080, h: 1080 },
]

const PATTERNS: { id: PatternId; name: string }[] = [
    { id: "petals", name: "Petals" },
    { id: "trellis", name: "Trellis" },
    { id: "dots", name: "Pollen" },
]

function IconButton({ icon, label, onClick, disabled = false }: {
    icon: IconName
    label: string
    onClick: () => void
    disabled?: boolean
}) {
    return (
        <button className="ed-icon-btn" type="button" aria-label={label} title={label} onClick={onClick} disabled={disabled}>
            <Icon name={icon} />
        </button>
    )
}

function ColorField({ label, value, set }: { label: string; value: string; set: (value: string) => void }) {
    return (
        <label className="ed-color-field">
            <span>{label}</span>
            <span className="ed-color-control">
                <input type="color" value={value} onChange={(event) => set(event.target.value)} aria-label={`${label} color`} />
                <code>{value.toUpperCase()}</code>
            </span>
        </label>
    )
}

function HelpTip({ label, children }: { label: string; children: ReactNode }) {
    const [open, setOpen] = useState(false)
    const id = useId()

    return (
        <span
            className={`ed-help-tip${open ? " is-open" : ""}`}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
            }}
            onKeyDown={(event) => {
                if (event.key === "Escape") {
                    setOpen(false)
                    event.currentTarget.querySelector("button")?.focus()
                }
            }}
        >
            <button
                type="button"
                className="ed-help-trigger"
                aria-label={`Help: ${label}`}
                aria-describedby={id}
                aria-controls={id}
                aria-expanded={open}
                onFocus={() => setOpen(true)}
                onClick={() => setOpen(true)}
            >?</button>
            <span className="ed-help-popover" id={id} role="tooltip">{children}</span>
        </span>
    )
}

function RangeField({ label, help, value, min, max, step, unit = "", set, act }: {
    label: string
    help?: ReactNode
    value: number
    min: number
    max: number
    step: number
    unit?: string
    set: (value: number) => Doc
    act: ControlActions
}) {
    const id = useId()

    return (
        <div className="ed-range-field">
            <span>
                <span className="ed-range-label"><label htmlFor={id}>{label}</label>{help && <HelpTip label={label}>{help}</HelpTip>}</span>
                <output htmlFor={id}>{Math.round(value * 100) / 100}{unit}</output>
            </span>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onPointerDown={act.begin}
                onPointerUp={act.end}
                onPointerCancel={act.end}
                onChange={(event) => act.live(set(Number(event.target.value)))}
            />
        </div>
    )
}

function NumberField({ label, value, min, max, step = 1, set }: {
    label: string
    value: number
    min: number
    max: number
    step?: number
    set: (value: number) => void
}) {
    return (
        <label className="ed-number-field">
            <span>{label}</span>
            <input
                type="number"
                value={Math.round(value * 10) / 10}
                min={min}
                max={max}
                step={step}
                onChange={(event) => {
                    const next = Number(event.target.value)
                    if (Number.isFinite(next)) set(next)
                }}
            />
        </label>
    )
}

function Section({ icon, title, children, open = false }: {
    icon: IconName
    title: string
    children: ReactNode
    open?: boolean
}) {
    return (
        <details className="ed-section" open={open}>
            <summary><Icon name={icon} /><span>{title}</span><Icon name="chevron-down" className="ed-summary-arrow" /></summary>
            <div className="ed-section-body">{children}</div>
        </details>
    )
}

function replaceAsset(doc: Doc, item: FlowerItem, id: FlowerId) {
    const colors = [...FLOWER_MAP[id].colors]
    return {
        ...doc,
        items: doc.items.map((value) => value.id === item.id ? { ...value, asset: id, colors } : value),
    }
}

function Selected({ doc, sel, act }: Props) {
    const list = doc.items.filter((item) => sel.includes(item.id))
    if (!list.length) return null

    if (list.length > 1) {
        return (
            <section className="ed-inspector">
                <div className="ed-inspector-head">
                    <div><span className="ed-eyebrow">Selection</span><h2>{list.length} flowers</h2></div>
                    <IconButton icon="close" label="Deselect flowers" onClick={() => act.select([])} />
                </div>
                <p className="ed-help">Drag any selected flower to move the group. Layer and edit actions apply to the whole selection where supported.</p>
                <div className="ed-button-row">
                    <button type="button" className="ed-soft-btn" onClick={act.duplicate}><Icon name="duplicate" />Duplicate</button>
                    <button type="button" className="ed-danger-btn" onClick={act.remove}><Icon name="trash" />Delete</button>
                </div>
            </section>
        )
    }

    const item = list[0]!
    const flower = FLOWER_MAP[item.asset]
    const setItem = (patch: Partial<FlowerItem>) => {
        act.change({
            ...doc,
            items: doc.items.map((value) => value.id === item.id
                ? clampItem({ ...value, ...patch }, doc.canvas)
                : value),
        })
    }
    const setStyle = (style: FlowerStyle) => act.change(replaceAsset(doc, item, `${style}-${flower.species}`))
    const setSpecies = (species: FlowerSpecies) => act.change(replaceAsset(doc, item, `${flower.style}-${species}`))

    return (
        <section className="ed-inspector">
            <div className="ed-inspector-head">
                <div>
                    <span className="ed-eyebrow">Selected flower</span>
                    <h2>{flower.name} <small>{FLOWER_STYLE_DETAILS[flower.style].label}</small></h2>
                </div>
                <IconButton icon="close" label="Deselect flower" onClick={() => act.select([])} />
            </div>

            <div className="ed-select-grid">
                <label><span>Species</span><select value={flower.species} onChange={(event) => setSpecies(event.target.value as FlowerSpecies)}>
                    {FLOWER_SPECIES.map((species) => <option value={species} key={species}>{FLOWER_SPECIES_NAMES[species]}</option>)}
                </select></label>
                <label><span>Style</span><select value={flower.style} onChange={(event) => setStyle(event.target.value as FlowerStyle)}>
                    {FLOWER_STYLES.map((style) => <option value={style} key={style}>{FLOWER_STYLE_DETAILS[style].label}</option>)}
                </select></label>
            </div>

            <div className="ed-subgroup">
                <h3>Transform</h3>
                <div className="ed-number-grid">
                    <NumberField label="X" value={item.x} min={-item.size} max={doc.canvas.w + item.size} set={(x) => setItem({ x })} />
                    <NumberField label="Y" value={item.y} min={-item.size} max={doc.canvas.h + item.size} set={(y) => setItem({ y })} />
                    <NumberField label="Size" value={item.size} min={40} max={Math.max(doc.canvas.w, doc.canvas.h) * 2} set={(size) => setItem({ size })} />
                    <NumberField label="Rotation" value={item.rot} min={0} max={360} set={(rot) => setItem({ rot: ((rot % 360) + 360) % 360 })} />
                </div>
            </div>

            <div className="ed-subgroup">
                <h3>Colors</h3>
                <div className="ed-palette-list">
                    {flower.slots.map((slot, index) => (
                        <ColorField key={slot} label={slot} value={item.colors[index] ?? flower.colors[index]!} set={(color) => {
                            const colors = [...item.colors]
                            colors[index] = color
                            setItem({ colors })
                        }} />
                    ))}
                </div>
            </div>

            <div className="ed-subgroup">
                <h3>Layer order</h3>
                <div className="ed-layer-actions">
                    <IconButton icon="bring-forward" label="Bring to front" onClick={() => act.moveLayer("front")} />
                    <IconButton icon="chevron-up" label="Bring forward" onClick={() => act.moveLayer("forward")} />
                    <IconButton icon="chevron-down" label="Send backward" onClick={() => act.moveLayer("backward")} />
                    <IconButton icon="send-back" label="Send to back" onClick={() => act.moveLayer("back")} />
                </div>
            </div>

            <div className="ed-button-row">
                <button type="button" className="ed-soft-btn" onClick={act.duplicate}><Icon name="duplicate" />Duplicate</button>
                <button type="button" className="ed-danger-btn" onClick={act.remove}><Icon name="trash" />Delete</button>
            </div>
        </section>
    )
}

function Flowers({ act }: Pick<Props, "act">) {
    return (
        <Section icon="flower" title="Flowers" open>
            {FLOWER_STYLES.map((style) => (
                <details className="ed-flower-group" key={style} open={style === FLOWER_STYLES[0]}>
                    <summary className="ed-group-heading">
                        <h3>{FLOWER_STYLE_DETAILS[style].label}</h3>
                        <span>{FLOWER_STYLE_DETAILS[style].description}</span>
                        <Icon name="chevron-down" className="ed-summary-arrow" />
                    </summary>
                    <div className="ed-flower-group-body">
                        <div className="ed-flower-grid">
                            {FLOWERS.filter((flower) => flower.style === style).map((flower) => (
                                <button key={flower.id} className="ed-flower-card" type="button" onClick={() => act.add(flower.id)} aria-label={`Add ${style} ${flower.name}`}>
                                    <svg viewBox="0 0 512 512" aria-hidden="true"><FlowerArt id={flower.id} /></svg>
                                    <span>{flower.name}</span><small>Add</small>
                                </button>
                            ))}
                        </div>
                    </div>
                </details>
            ))}
        </Section>
    )
}

function Composition({ doc, act }: Pick<Props, "doc" | "act">) {
    return (
        <Section icon="sparkle" title="Composition" open>
            <button type="button" className="ed-primary-btn ed-generate" onClick={act.generate}>
                <Icon name="sparkle" />Randomize composition
            </button>
            <div className="ed-composition-note"><Icon name="info" /><span>These settings apply to the next randomization. Generated flowers remain fully editable.</span></div>
            <RangeField label="Density" help="Controls how many flowers fill the canvas." value={doc.gen.density} min={10} max={100} step={1} unit="%" act={act}
                set={(density) => ({ ...doc, gen: { ...doc.gen, density } })} />
            <RangeField label="Flower size" help="Controls the overall flower scale in the next composition." value={doc.gen.size} min={0.6} max={1.6} step={0.05} unit="×" act={act}
                set={(size) => ({ ...doc, gen: { ...doc.gen, size } })} />
            <div className="ed-subgroup">
                <h3>Randomize with</h3>
                {FLOWER_STYLES.map((style) => (
                    <details className="ed-flower-group" key={style} open={style === FLOWER_STYLES[0]}>
                        <summary className="ed-group-heading">
                            <h3>{FLOWER_STYLE_DETAILS[style].label}</h3>
                            <span>{FLOWER_STYLE_DETAILS[style].description}</span>
                            <Icon name="chevron-down" className="ed-summary-arrow" />
                        </summary>
                        <div className="ed-flower-group-body">
                            <div className="ed-pool-grid">
                                {FLOWERS.filter((flower) => flower.style === style).map((flower) => {
                                    const checked = doc.gen.pool.includes(flower.id)
                                    return (
                                        <label key={flower.id} className="ed-check-chip">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                disabled={checked && doc.gen.pool.length === 1}
                                                onChange={() => {
                                                    const pool = checked
                                                        ? doc.gen.pool.filter((id) => id !== flower.id)
                                                        : [...doc.gen.pool, flower.id]
                                                    act.change({ ...doc, gen: { ...doc.gen, pool } })
                                                }}
                                            />
                                            <span>{flower.name}</span>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    </details>
                ))}
            </div>
        </Section>
    )
}

function CanvasSize({ doc, act }: Pick<Props, "doc" | "act">) {
    const [w, setW] = useState(String(doc.canvas.w))
    const [h, setH] = useState(String(doc.canvas.h))
    const [error, setError] = useState<string | null>(null)

    function apply() {
        const width = Number(w)
        const height = Number(h)
        const problem = sizeError(width, height)
        setError(problem)
        if (!problem) act.change(resizeDoc(doc, width, height, "custom"))
    }

    function preset(id: Ratio, width: number, height: number) {
        act.change(resizeDoc(doc, width, height, id))
    }

    function rotate() {
        const id: Ratio = doc.canvas.ratio === "16:9" ? "9:16" : doc.canvas.ratio === "9:16" ? "16:9" : doc.canvas.ratio === "1:1" ? "1:1" : "custom"
        act.change(resizeDoc(doc, doc.canvas.h, doc.canvas.w, id))
    }

    return (
        <Section icon="ratio" title="Canvas & size">
            <div className="ed-ratio-grid">
                {PRESETS.map((item) => (
                    <button type="button" key={item.id} className={doc.canvas.ratio === item.id ? "is-active" : ""} onClick={() => preset(item.id, item.w, item.h)}>
                        <strong>{item.label}</strong><small>{item.hint}</small>
                    </button>
                ))}
                <button type="button" className={doc.canvas.ratio === "custom" ? "is-active" : ""} onClick={() => act.change({ ...doc, canvas: { ...doc.canvas, ratio: "custom" } })}>
                    <strong>Custom</strong><small>Any safe size</small>
                </button>
            </div>
            <div className="ed-dim-row">
                <label><span>Width</span><input type="number" min={MIN_SIDE} max={MAX_SIDE} value={w} onChange={(event) => setW(event.target.value)} /></label>
                <span aria-hidden="true">×</span>
                <label><span>Height</span><input type="number" min={MIN_SIDE} max={MAX_SIDE} value={h} onChange={(event) => setH(event.target.value)} /></label>
            </div>
            {error && <p className="ed-field-error" role="alert">{error}</p>}
            <div className="ed-button-row">
                <button type="button" className="ed-soft-btn" onClick={apply}>Apply size</button>
                <button type="button" className="ed-soft-btn" onClick={rotate}><Icon name="rotate" />Swap orientation</button>
            </div>
            <p className="ed-help">{MIN_SIDE}–{MAX_SIDE}px per side, up to {Math.round(MAX_PIXELS / 1_000_000)} megapixels. Flowers keep their relative placement.</p>
        </Section>
    )
}

function bgFor(kind: Bg["kind"]): Bg {
    if (kind === "transparent") return { kind }
    if (kind === "solid") return { kind, color: "#f7f3ea" }
    if (kind === "gradient") return { kind, a: "#f8d9cf", b: "#dbe8cf", angle: 135 }
    return { kind, id: "petals", base: "#f7f3ea", ink: "#d27883", scale: 1, opacity: 0.24 }
}

function Background({ doc, act }: Pick<Props, "doc" | "act">) {
    const setBg = (bg: Bg) => act.change({ ...doc, bg })
    return (
        <Section icon="palette" title="Background">
            <div className="ed-mode-tabs" role="group" aria-label="Background type">
                {(["transparent", "solid", "gradient", "pattern"] as Bg["kind"][]).map((kind) => (
                    <button type="button" key={kind} className={doc.bg.kind === kind ? "is-active" : ""} onClick={() => setBg(bgFor(kind))}>{kind}</button>
                ))}
            </div>
            {doc.bg.kind === "transparent" && <div className="ed-note"><Icon name="info" /><span>PNG and SVG keep transparency. JPG uses an ivory matte.</span></div>}
            {doc.bg.kind === "solid" && <ColorField label="Canvas color" value={doc.bg.color} set={(color) => setBg({ kind: "solid", color })} />}
            {doc.bg.kind === "gradient" && (
                <>
                    <ColorField label="Start color" value={doc.bg.a} set={(a) => setBg({ kind: "gradient", a, b: doc.bg.kind === "gradient" ? doc.bg.b : "#dbe8cf", angle: doc.bg.kind === "gradient" ? doc.bg.angle : 135 })} />
                    <ColorField label="End color" value={doc.bg.b} set={(b) => setBg({ kind: "gradient", a: doc.bg.kind === "gradient" ? doc.bg.a : "#f8d9cf", b, angle: doc.bg.kind === "gradient" ? doc.bg.angle : 135 })} />
                    <RangeField label="Angle" value={doc.bg.angle} min={0} max={360} step={1} unit="°" act={act}
                        set={(angle) => ({ ...doc, bg: doc.bg.kind === "gradient" ? { ...doc.bg, angle } : doc.bg })} />
                </>
            )}
            {doc.bg.kind === "pattern" && (
                <>
                    <div className="ed-pattern-grid">
                        {PATTERNS.map((pattern) => <button type="button" key={pattern.id} className={doc.bg.kind === "pattern" && doc.bg.id === pattern.id ? "is-active" : ""} onClick={() => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, id: pattern.id } : bgFor("pattern"))}><span className={`ed-pattern-swatch is-${pattern.id}`} />{pattern.name}</button>)}
                    </div>
                    <ColorField label="Base color" value={doc.bg.base} set={(base) => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, base } : bgFor("pattern"))} />
                    <ColorField label="Pattern color" value={doc.bg.ink} set={(ink) => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, ink } : bgFor("pattern"))} />
                    <RangeField label="Pattern scale" value={doc.bg.scale} min={0.4} max={2.4} step={0.05} unit="×" act={act}
                        set={(scale) => ({ ...doc, bg: doc.bg.kind === "pattern" ? { ...doc.bg, scale } : doc.bg })} />
                    <RangeField label="Pattern opacity" value={doc.bg.opacity} min={0.05} max={0.8} step={0.01} unit="" act={act}
                        set={(opacity) => ({ ...doc, bg: doc.bg.kind === "pattern" ? { ...doc.bg, opacity } : doc.bg })} />
                </>
            )}
        </Section>
    )
}

function Layers({ doc, sel, act }: Props) {
    function visibility(item: FlowerItem) {
        act.change({ ...doc, items: doc.items.map((value) => value.id === item.id ? { ...value, hidden: !value.hidden } : value) })
        if (!item.hidden && sel.includes(item.id)) act.select(sel.filter((id) => id !== item.id))
    }

    return (
        <Section icon="layers" title={`Layers · ${doc.items.length}`}>
            {!doc.items.length && <p className="ed-empty">Your flower layers will appear here.</p>}
            <div className="ed-layer-list">
                {[...doc.items].reverse().map((item, reverseIndex) => {
                    const flower = FLOWER_MAP[item.asset]
                    const active = sel.includes(item.id)
                    return (
                        <div className={`ed-layer-row ${active ? "is-active" : ""} ${item.hidden ? "is-hidden" : ""}`} key={item.id}>
                            <button type="button" className="ed-layer-main" onClick={() => act.select([item.id])} aria-pressed={active}>
                                <svg viewBox="0 0 512 512" aria-hidden="true"><FlowerArt id={item.asset} colors={item.colors} /></svg>
                                <span><strong>{flower.name}</strong><small>{flower.style} · layer {doc.items.length - reverseIndex}</small></span>
                            </button>
                            <IconButton icon={item.hidden ? "eye-off" : "eye"} label={item.hidden ? `Show ${flower.name}` : `Hide ${flower.name}`} onClick={() => visibility(item)} />
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export function Controls(props: Props) {
    return (
        <>
            <Selected {...props} />
            <Flowers act={props.act} />
            <Composition doc={props.doc} act={props.act} />
            <CanvasSize key={`${props.doc.canvas.w}x${props.doc.canvas.h}`} doc={props.doc} act={props.act} />
            <Background doc={props.doc} act={props.act} />
            <Layers {...props} />
        </>
    )
}
