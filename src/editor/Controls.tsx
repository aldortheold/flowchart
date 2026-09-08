import { useId, useState, type ReactNode } from "react"
import {
    FlowerArt,
    FLOWERS,
    FLOWER_MAP,
    FLOWER_SPECIES,
    FLOWER_STYLES,
} from "../flowers"
import type { FlowerId, FlowerSpecies, FlowerStyle } from "../flowers"
import { Icon, type IconName } from "../components/Icons"
import { MAX_PIXELS, MAX_SIDE, MIN_SIDE, clampItem, resizeDoc, sizeError, type SizeError } from "./model"
import type { Bg, Doc, FlowerItem, PatternId, Ratio } from "./types"
import { useI18n, type MessageKey } from "../i18n"
import { colorSlotKeys, flowerSpeciesKeys, flowerStyleDescriptionKeys, flowerStyleNameKeys, patternNameKeys } from "../i18n/catalog"

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
}

type Props = {
    doc: Doc
    sel: string[]
    act: ControlActions
}

const PRESETS: { id: Ratio; label: string; hintKey: MessageKey; w: number; h: number }[] = [
    { id: "16:9", label: "16:9", hintKey: "editor.canvasSize.desktop", w: 1920, h: 1080 },
    { id: "9:16", label: "9:16", hintKey: "editor.canvasSize.phone", w: 1080, h: 1920 },
    { id: "4:3", label: "4:3", hintKey: "editor.canvasSize.tablet", w: 2048, h: 1536 },
    { id: "1:1", label: "1:1", hintKey: "editor.canvasSize.square", w: 1080, h: 1080 },
]

const PATTERNS: PatternId[] = ["petals", "trellis", "dots"]

const backgroundKindKeys = {
    transparent: "editor.background.transparent",
    solid: "editor.background.solid",
    gradient: "editor.background.gradient",
    pattern: "editor.background.pattern",
} as const satisfies Record<Bg["kind"], MessageKey>

const sizeErrorKeys = {
    integer: "editor.canvasSize.error.integer",
    range: "editor.canvasSize.error.range",
    area: "editor.canvasSize.error.area",
} as const satisfies Record<SizeError, MessageKey>

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
    const { t } = useI18n()
    return (
        <label className="ed-color-field">
            <span>{label}</span>
            <span className="ed-color-control">
                <input type="color" value={value} onChange={(event) => set(event.target.value)} aria-label={t("editor.colors.inputLabel", { label })} />
                <code>{value.toUpperCase()}</code>
            </span>
        </label>
    )
}

function HelpTip({ label, children }: { label: string; children: ReactNode }) {
    const { t } = useI18n()
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
                aria-label={t("editor.help.label", { label })}
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
    const { number } = useI18n()
    const id = useId()

    return (
        <div className="ed-range-field">
            <span>
                <span className="ed-range-label"><label htmlFor={id}>{label}</label>{help && <HelpTip label={label}>{help}</HelpTip>}</span>
                <output htmlFor={id}>{number(Math.round(value * 100) / 100, { maximumFractionDigits: 2 })}{unit}</output>
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
    const { t, tp, number } = useI18n()
    const list = doc.items.filter((item) => sel.includes(item.id))
    if (!list.length) return null

    if (list.length > 1) {
        return (
            <section className="ed-inspector">
                <div className="ed-inspector-head">
                    <div><span className="ed-eyebrow">{t("editor.selection.eyebrow")}</span><h2>{tp("flower.count", list.length, { count: number(list.length) })}</h2></div>
                    <IconButton icon="close" label={t("editor.selection.deselectMultiple")} onClick={() => act.select([])} />
                </div>
                <p className="ed-help">{t("editor.selection.help")}</p>
                <div className="ed-button-row">
                    <button type="button" className="ed-soft-btn" onClick={act.duplicate}><Icon name="duplicate" />{t("editor.selection.duplicate")}</button>
                    <button type="button" className="ed-danger-btn" onClick={act.remove}><Icon name="trash" />{t("editor.selection.delete")}</button>
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
                    <span className="ed-eyebrow">{t("editor.selection.selectedFlower")}</span>
                    <h2>{t(flowerSpeciesKeys[flower.species])} <small>{t(flowerStyleNameKeys[flower.style])}</small></h2>
                </div>
                <IconButton icon="close" label={t("editor.selection.deselectOne")} onClick={() => act.select([])} />
            </div>

            <div className="ed-select-grid">
                <label><span>{t("editor.selection.species")}</span><select value={flower.species} onChange={(event) => setSpecies(event.target.value as FlowerSpecies)}>
                    {FLOWER_SPECIES.map((species) => <option value={species} key={species}>{t(flowerSpeciesKeys[species])}</option>)}
                </select></label>
                <label><span>{t("editor.selection.style")}</span><select value={flower.style} onChange={(event) => setStyle(event.target.value as FlowerStyle)}>
                    {FLOWER_STYLES.map((style) => <option value={style} key={style}>{t(flowerStyleNameKeys[style])}</option>)}
                </select></label>
            </div>

            <div className="ed-subgroup">
                <h3>{t("editor.selection.transform")}</h3>
                <div className="ed-number-grid">
                    <NumberField label={t("editor.selection.x")} value={item.x} min={-item.size} max={doc.canvas.w + item.size} set={(x) => setItem({ x })} />
                    <NumberField label={t("editor.selection.y")} value={item.y} min={-item.size} max={doc.canvas.h + item.size} set={(y) => setItem({ y })} />
                    <NumberField label={t("editor.selection.size")} value={item.size} min={40} max={Math.max(doc.canvas.w, doc.canvas.h) * 2} set={(size) => setItem({ size })} />
                    <NumberField label={t("editor.selection.rotation")} value={item.rot} min={0} max={360} set={(rot) => setItem({ rot: ((rot % 360) + 360) % 360 })} />
                </div>
            </div>

            <div className="ed-subgroup">
                <h3>{t("editor.selection.colors")}</h3>
                <div className="ed-palette-list">
                    {flower.slots.map((slot, index) => {
                        const key = colorSlotKeys[slot as keyof typeof colorSlotKeys]
                        const label = key ? t(key) : t("flower.slot.artworkColor", { index: number(index + 1) })
                        return <ColorField key={slot} label={label} value={item.colors[index] ?? flower.colors[index]!} set={(color) => {
                            const colors = [...item.colors]
                            colors[index] = color
                            setItem({ colors })
                        }} />
                    })}
                </div>
            </div>

            <div className="ed-subgroup">
                <h3>{t("editor.selection.layerOrder")}</h3>
                <div className="ed-layer-actions">
                    <IconButton icon="bring-forward" label={t("editor.selection.front")} onClick={() => act.moveLayer("front")} />
                    <IconButton icon="chevron-up" label={t("editor.selection.forward")} onClick={() => act.moveLayer("forward")} />
                    <IconButton icon="chevron-down" label={t("editor.selection.backward")} onClick={() => act.moveLayer("backward")} />
                    <IconButton icon="send-back" label={t("editor.selection.back")} onClick={() => act.moveLayer("back")} />
                </div>
            </div>

            <div className="ed-button-row">
                <button type="button" className="ed-soft-btn" onClick={act.duplicate}><Icon name="duplicate" />{t("editor.selection.duplicate")}</button>
                <button type="button" className="ed-danger-btn" onClick={act.remove}><Icon name="trash" />{t("editor.selection.delete")}</button>
            </div>
        </section>
    )
}

function Flowers({ act }: Pick<Props, "act">) {
    const { t } = useI18n()
    return (
        <Section icon="flower" title={t("editor.flowers.title")} open>
            {FLOWER_STYLES.map((style) => (
                <details className="ed-flower-group" key={style} open={style === FLOWER_STYLES[0]}>
                    <summary className="ed-group-heading">
                        <h3>{t(flowerStyleNameKeys[style])}</h3>
                        <span>{t(flowerStyleDescriptionKeys[style])}</span>
                        <Icon name="chevron-down" className="ed-summary-arrow" />
                    </summary>
                    <div className="ed-flower-group-body">
                        <div className="ed-flower-grid">
                            {FLOWERS.filter((flower) => flower.style === style).map((flower) => (
                                <button key={flower.id} className="ed-flower-card" type="button" onClick={() => act.add(flower.id)} aria-label={t("editor.flowers.addLabel", {
                                    style: t(flowerStyleNameKeys[style]),
                                    species: t(flowerSpeciesKeys[flower.species]),
                                })}>
                                    <svg viewBox="0 0 512 512" aria-hidden="true"><FlowerArt id={flower.id} /></svg>
                                    <span>{t(flowerSpeciesKeys[flower.species])}</span><small>{t("editor.flowers.add")}</small>
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
    const { t } = useI18n()
    return (
        <Section icon="sparkle" title={t("editor.composition.title")} open>
            <button type="button" className="ed-primary-btn ed-generate" onClick={act.generate}>
                <Icon name="sparkle" />{t("editor.composition.randomize")}
            </button>
            <div className="ed-composition-note"><Icon name="info" /><span>{t("editor.composition.note")}</span></div>
            <RangeField label={t("editor.composition.density")} help={t("editor.composition.densityHelp")} value={doc.gen.density} min={10} max={100} step={1} unit="%" act={act}
                set={(density) => ({ ...doc, gen: { ...doc.gen, density } })} />
            <RangeField label={t("editor.composition.size")} help={t("editor.composition.sizeHelp")} value={doc.gen.size} min={0.6} max={1.6} step={0.05} unit="×" act={act}
                set={(size) => ({ ...doc, gen: { ...doc.gen, size } })} />
            <div className="ed-subgroup">
                <h3>{t("editor.composition.randomizeWith")}</h3>
                {FLOWER_STYLES.map((style) => (
                    <details className="ed-flower-group" key={style} open={style === FLOWER_STYLES[0]}>
                        <summary className="ed-group-heading">
                            <h3>{t(flowerStyleNameKeys[style])}</h3>
                            <span>{t(flowerStyleDescriptionKeys[style])}</span>
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
                                            <span>{t(flowerSpeciesKeys[flower.species])}</span>
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
    const { t, number } = useI18n()
    const [w, setW] = useState(String(doc.canvas.w))
    const [h, setH] = useState(String(doc.canvas.h))
    const [error, setError] = useState<SizeError | null>(null)

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
        <Section icon="ratio" title={t("editor.canvasSize.title")}>
            <div className="ed-ratio-grid">
                {PRESETS.map((item) => (
                    <button type="button" key={item.id} className={doc.canvas.ratio === item.id ? "is-active" : ""} onClick={() => preset(item.id, item.w, item.h)}>
                        <strong>{item.label}</strong><small>{t(item.hintKey)}</small>
                    </button>
                ))}
                <button type="button" className={doc.canvas.ratio === "custom" ? "is-active" : ""} onClick={() => act.change({ ...doc, canvas: { ...doc.canvas, ratio: "custom" } })}>
                    <strong>{t("editor.canvasSize.custom")}</strong><small>{t("editor.canvasSize.anySafeSize")}</small>
                </button>
            </div>
            <div className="ed-dim-row">
                <label><span>{t("editor.canvasSize.width")}</span><input type="number" min={MIN_SIDE} max={MAX_SIDE} value={w} onChange={(event) => setW(event.target.value)} /></label>
                <span aria-hidden="true">×</span>
                <label><span>{t("editor.canvasSize.height")}</span><input type="number" min={MIN_SIDE} max={MAX_SIDE} value={h} onChange={(event) => setH(event.target.value)} /></label>
            </div>
            {error && <p className="ed-field-error" role="alert">{t(sizeErrorKeys[error], {
                min: number(MIN_SIDE),
                max: number(MAX_SIDE),
                maxPixels: number(MAX_PIXELS),
            })}</p>}
            <div className="ed-button-row">
                <button type="button" className="ed-soft-btn" onClick={apply}>{t("editor.canvasSize.apply")}</button>
                <button type="button" className="ed-soft-btn" onClick={rotate}><Icon name="rotate" />{t("editor.canvasSize.swap")}</button>
            </div>
            <p className="ed-help">{t("editor.canvasSize.help", {
                min: number(MIN_SIDE),
                max: number(MAX_SIDE),
                megapixels: number(Math.round(MAX_PIXELS / 1_000_000)),
            })}</p>
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
    const { t } = useI18n()
    const setBg = (bg: Bg) => act.change({ ...doc, bg })
    return (
        <Section icon="palette" title={t("editor.background.title")}>
            <div className="ed-mode-tabs" role="group" aria-label={t("editor.background.typeLabel")}>
                {(["transparent", "solid", "gradient", "pattern"] as Bg["kind"][]).map((kind) => (
                    <button type="button" key={kind} className={doc.bg.kind === kind ? "is-active" : ""} onClick={() => setBg(bgFor(kind))}>{t(backgroundKindKeys[kind])}</button>
                ))}
            </div>
            {doc.bg.kind === "transparent" && <div className="ed-note"><Icon name="info" /><span>{t("editor.background.transparentNote")}</span></div>}
            {doc.bg.kind === "solid" && <ColorField label={t("editor.background.canvasColor")} value={doc.bg.color} set={(color) => setBg({ kind: "solid", color })} />}
            {doc.bg.kind === "gradient" && (
                <>
                    <ColorField label={t("editor.background.startColor")} value={doc.bg.a} set={(a) => setBg({ kind: "gradient", a, b: doc.bg.kind === "gradient" ? doc.bg.b : "#dbe8cf", angle: doc.bg.kind === "gradient" ? doc.bg.angle : 135 })} />
                    <ColorField label={t("editor.background.endColor")} value={doc.bg.b} set={(b) => setBg({ kind: "gradient", a: doc.bg.kind === "gradient" ? doc.bg.a : "#f8d9cf", b, angle: doc.bg.kind === "gradient" ? doc.bg.angle : 135 })} />
                    <RangeField label={t("editor.background.angle")} value={doc.bg.angle} min={0} max={360} step={1} unit="°" act={act}
                        set={(angle) => ({ ...doc, bg: doc.bg.kind === "gradient" ? { ...doc.bg, angle } : doc.bg })} />
                </>
            )}
            {doc.bg.kind === "pattern" && (
                <>
                    <div className="ed-pattern-grid">
                        {PATTERNS.map((pattern) => <button type="button" key={pattern} className={doc.bg.kind === "pattern" && doc.bg.id === pattern ? "is-active" : ""} onClick={() => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, id: pattern } : bgFor("pattern"))}><span className={`ed-pattern-swatch is-${pattern}`} />{t(patternNameKeys[pattern])}</button>)}
                    </div>
                    <ColorField label={t("editor.background.baseColor")} value={doc.bg.base} set={(base) => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, base } : bgFor("pattern"))} />
                    <ColorField label={t("editor.background.patternColor")} value={doc.bg.ink} set={(ink) => setBg(doc.bg.kind === "pattern" ? { ...doc.bg, ink } : bgFor("pattern"))} />
                    <RangeField label={t("editor.background.patternScale")} value={doc.bg.scale} min={0.4} max={2.4} step={0.05} unit="×" act={act}
                        set={(scale) => ({ ...doc, bg: doc.bg.kind === "pattern" ? { ...doc.bg, scale } : doc.bg })} />
                    <RangeField label={t("editor.background.patternOpacity")} value={doc.bg.opacity} min={0.05} max={0.8} step={0.01} unit="" act={act}
                        set={(opacity) => ({ ...doc, bg: doc.bg.kind === "pattern" ? { ...doc.bg, opacity } : doc.bg })} />
                </>
            )}
        </Section>
    )
}

function Layers({ doc, sel, act }: Props) {
    const { t, number } = useI18n()
    function visibility(item: FlowerItem) {
        act.change({ ...doc, items: doc.items.map((value) => value.id === item.id ? { ...value, hidden: !value.hidden } : value) })
        if (!item.hidden && sel.includes(item.id)) act.select(sel.filter((id) => id !== item.id))
    }

    return (
        <Section icon="layers" title={t("editor.layers.title", { count: number(doc.items.length) })}>
            {!doc.items.length && <p className="ed-empty">{t("editor.layers.empty")}</p>}
            <div className="ed-layer-list">
                {[...doc.items].reverse().map((item, reverseIndex) => {
                    const flower = FLOWER_MAP[item.asset]
                    const active = sel.includes(item.id)
                    return (
                        <div className={`ed-layer-row ${active ? "is-active" : ""} ${item.hidden ? "is-hidden" : ""}`} key={item.id}>
                            <button type="button" className="ed-layer-main" onClick={() => act.select([item.id])} aria-pressed={active}>
                                <svg viewBox="0 0 512 512" aria-hidden="true"><FlowerArt id={item.asset} colors={item.colors} /></svg>
                                <span><strong>{t(flowerSpeciesKeys[flower.species])}</strong><small>{t("editor.layers.description", {
                                    style: t(flowerStyleNameKeys[flower.style]),
                                    number: number(doc.items.length - reverseIndex),
                                })}</small></span>
                            </button>
                            <IconButton icon={item.hidden ? "eye-off" : "eye"} label={t(item.hidden ? "editor.layers.show" : "editor.layers.hide", {
                                species: t(flowerSpeciesKeys[flower.species]),
                            })} onClick={() => visibility(item)} />
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
