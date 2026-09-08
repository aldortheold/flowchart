import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import Brand from "../components/Brand"
import { Icon } from "../components/Icons"
import { Art } from "../editor/Art"
import type { Bg, Doc, Ratio } from "../editor/types"
import {
  FlowerArt,
  FLOWER_MAP,
  FLOWER_STYLES,
  type FlowerId,
  type FlowerStyle,
} from "../flowers"
import { LanguageSelector, useI18n } from "../i18n"
import { flowerSpeciesKeys, flowerStyleDescriptionKeys, flowerStyleNameKeys } from "../i18n/catalog"
import { ThemeToggle } from "../theme"
import "./Home.css"

type ItemInput = [FlowerId, number, number, number, number]

function composition(
  name: string,
  w: number,
  h: number,
  ratio: Ratio,
  bg: Bg,
  items: ItemInput[],
): Doc {
  const flowers = items.map(([asset, x, y, size, rot], index) => ({
    id: `${name}-${index}`,
    asset,
    x,
    y,
    size,
    rot,
    colors: [...FLOWER_MAP[asset].colors],
    hidden: false,
  }))

  return {
    v: 1,
    canvas: { w, h, ratio },
    bg,
    gen: {
      pool: [...new Set(flowers.map((item) => item.asset))],
      density: 54,
      size: 1,
      seed: 1,
    },
    items: flowers,
  }
}

const HERO_DOC = composition(
  "hero",
  1400,
  1050,
  "4:3",
  { kind: "pattern", id: "petals", base: "#eadfcd", ink: "#b24c62", scale: 1.45, opacity: 0.1 },
  [
    ["botanical-peony", 120, 92, 510, -15],
    ["minimal-sunflower", 620, 190, 370, 13],
    ["origami-dahlia", 1115, 138, 475, 7],
    ["line-art-lotus", 782, 570, 430, -11],
    ["botanical-camellia", 250, 740, 520, 19],
    ["minimal-tulip", 1050, 855, 395, -22],
    ["retro-poppy", 1360, 595, 390, 18],
    ["botanical-forget-me-not", 528, 500, 230, -8],
    ["origami-narcissus", 1305, 1010, 290, -15],
  ],
)

const STUDIO_DOCS = [
  composition(
    "studio-a",
    1600,
    900,
    "16:9",
    { kind: "solid", color: "#f3dcd1" },
    [
      ["botanical-peony", 85, 84, 430, -12],
      ["botanical-camellia", 520, 238, 340, 18],
      ["botanical-anemone", 1045, 128, 395, -9],
      ["botanical-daisy", 1460, 185, 360, 11],
      ["botanical-poppy", 300, 755, 420, 16],
      ["botanical-orchid", 840, 690, 380, -19],
      ["botanical-dahlia", 1280, 710, 465, 8],
      ["botanical-forget-me-not", 685, 455, 215, 3],
      ["botanical-lotus", 1510, 845, 300, -14],
      ["botanical-tulip", 35, 450, 245, 22],
    ],
  ),
  composition(
    "studio-b",
    1600,
    900,
    "16:9",
    { kind: "gradient", a: "#1a4c42", b: "#8d3150", angle: 28 },
    [
      ["origami-sunflower", 140, 95, 450, 10],
      ["origami-rose", 590, 188, 330, -15],
      ["origami-lotus", 1015, 90, 410, 8],
      ["origami-chrysanthemum", 1470, 235, 390, -6],
      ["origami-tulip", 290, 730, 380, -13],
      ["origami-peony", 810, 695, 440, 17],
      ["origami-dahlia", 1295, 720, 465, -8],
      ["origami-daisy", 645, 430, 225, 12],
      ["origami-narcissus", 1540, 790, 260, 18],
      ["origami-poppy", 45, 500, 250, -16],
    ],
  ),
  composition(
    "studio-c",
    1600,
    900,
    "16:9",
    { kind: "pattern", id: "dots", base: "#f4edcf", ink: "#29584b", scale: 1.25, opacity: 0.14 },
    [
      ["retro-hibiscus", 105, 115, 445, -8],
      ["retro-daisy", 505, 160, 330, 15],
      ["retro-peony", 960, 95, 405, -5],
      ["retro-sunflower", 1450, 190, 400, 11],
      ["retro-poppy", 300, 735, 390, 17],
      ["retro-orchid", 760, 700, 360, -14],
      ["retro-camellia", 1230, 725, 450, 8],
      ["retro-forget-me-not", 700, 420, 220, 9],
      ["retro-lotus", 1530, 825, 280, -15],
      ["retro-tulip", 30, 500, 250, 18],
    ],
  ),
]

const DESKTOP_DOC = composition(
  "desktop",
  1600,
  900,
  "16:9",
  { kind: "solid", color: "#173f38" },
  [
    ["line-art-sunflower", 40, 52, 430, -10],
    ["line-art-camellia", 500, 210, 350, 17],
    ["line-art-dahlia", 1010, 95, 425, -12],
    ["line-art-peony", 1490, 175, 400, 8],
    ["line-art-lotus", 255, 780, 440, 10],
    ["line-art-orchid", 810, 690, 380, -18],
    ["line-art-poppy", 1300, 735, 465, 13],
  ],
)

const SQUARE_DOC = composition(
  "square",
  1080,
  1080,
  "1:1",
  { kind: "pattern", id: "trellis", base: "#e7a451", ink: "#6e293e", scale: 1.2, opacity: 0.12 },
  [
    ["retro-sunflower", 90, 115, 440, -12],
    ["retro-rose", 700, 130, 390, 11],
    ["retro-daisy", 1050, 500, 360, -10],
    ["retro-peony", 460, 585, 500, 8],
    ["retro-tulip", 115, 930, 380, 19],
    ["retro-chrysanthemum", 820, 920, 470, -13],
  ],
)

const PHONE_DOC = composition(
  "phone",
  1080,
  1920,
  "9:16",
  { kind: "gradient", a: "#efe4d5", b: "#d9d7b8", angle: 155 },
  [
    ["minimal-poppy", 120, 115, 430, -10],
    ["minimal-sunflower", 825, 280, 480, 10],
    ["minimal-orchid", 390, 660, 400, -18],
    ["minimal-peony", 1000, 905, 445, 12],
    ["minimal-daisy", 160, 1180, 410, 17],
    ["minimal-camellia", 680, 1370, 470, -8],
    ["minimal-tulip", 180, 1810, 440, 14],
    ["minimal-lotus", 940, 1800, 420, -15],
  ],
)

const STYLE_FLOWERS: Record<FlowerStyle, FlowerId> = {
  botanical: "botanical-peony",
  minimal: "minimal-peony",
  "line-art": "line-art-peony",
  origami: "origami-peony",
  retro: "retro-peony",
}

const LAB_PALETTES = [
  {
    id: "teaRose",
    labelKey: "home.palette.teaRose",
    colors: ["#e8687b", "#d94c67", "#bd3455", "#f1848e", "#df5970", "#a92d4d", "#762943", "#f8a9af"],
  },
  {
    id: "moonGarden",
    labelKey: "home.palette.moonGarden",
    colors: ["#9bc6b3", "#6ea58e", "#3f7868", "#c2d8c3", "#7faf91", "#315b51", "#173f38", "#e5eed9"],
  },
  {
    id: "afterglow",
    labelKey: "home.palette.afterglow",
    colors: ["#ef8d55", "#dd654c", "#a83c48", "#f5b16f", "#cb4c53", "#792d45", "#4e2740", "#f8d79c"],
  },
  {
    id: "porcelain",
    labelKey: "home.palette.porcelain",
    colors: ["#b8cfdf", "#7fa8c2", "#486f91", "#dce8e8", "#91b7c7", "#35536f", "#26384f", "#f4eee1"],
  },
] as const

function Artwork({ doc, className = "" }: { doc: Doc; className?: string }) {
  const { t } = useI18n()
  return (
    <svg
      className={className}
      viewBox={`0 0 ${doc.canvas.w} ${doc.canvas.h}`}
      role="img"
      aria-label={t("home.artworkLabel")}
      preserveAspectRatio="xMidYMid slice"
    >
      <Art
        doc={doc}
        itemLabel={(item) => t("editor.art.flowerLabel", {
          species: t(flowerSpeciesKeys[FLOWER_MAP[item.asset].species]),
        })}
      />
    </svg>
  )
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ArrowLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Link to="/editor" className={`home-arrow-link ${className}`.trim()}>
      <span>{children}</span>
      <span className="home-arrow-disc"><Icon name="arrow-right" /></span>
    </Link>
  )
}

function Home() {
  const { t, tp, number } = useI18n()
  const reduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroArtY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 92])
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 42])
  const [activeStyle, setActiveStyle] = useState<FlowerStyle>("botanical")
  const [palette, setPalette] = useState(0)
  const [labSize, setLabSize] = useState(92)
  const [labRotation, setLabRotation] = useState(-8)
  const [studioIndex, setStudioIndex] = useState(0)
  const [density, setDensity] = useState(62)

  useEffect(() => {
    document.title = t("home.meta.title")
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("home.meta.description"))
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t("home.meta.title"))
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t("home.meta.description"))
  }, [t])

  const studioDoc = useMemo(() => {
    const source = STUDIO_DOCS[studioIndex]!
    const count = Math.max(4, Math.min(source.items.length, Math.round(3 + density / 12)))
    return { ...source, items: source.items.slice(0, count) }
  }, [density, studioIndex])

  function randomizeStudio() {
    setStudioIndex((current) => (current + 1) % STUDIO_DOCS.length)
  }

  const labFlowerStyle = {
    transform: `rotate(${labRotation}deg) scale(${labSize / 100})`,
  } as CSSProperties

  return (
    <main className="home" id="top">
      <a className="home-skip" href="#home-content">{t("home.skip")}</a>

      <header className="home-header" aria-label={t("home.nav.primary")}>
        <Link className="home-logo" to="/" aria-label={t("common.flowchartHome")}><Brand /></Link>
        <nav className="home-nav" aria-label={t("home.nav.sections")}>
          <a href="#styles">{t("home.nav.styles")}</a>
          <a href="#customize">{t("home.nav.customize")}</a>
          <a href="#studio">{t("home.nav.studio")}</a>
        </nav>
        <div className="home-head-actions">
          <LanguageSelector />
          <ThemeToggle />
          <Link className="home-head-cta" to="/editor">{t("home.openStudio")} <Icon name="arrow-right" /></Link>
        </div>
      </header>

      <section ref={heroRef} className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero-grain" aria-hidden="true" />
        <motion.div className="home-hero-copy" style={{ y: heroCopyY }}>
          <motion.p
            className="home-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.6 }}
          ><Icon name="flower" /> {t("home.hero.kicker")}</motion.p>
          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >{t("home.hero.titleLine")}<br /><em>{t("home.hero.titleEmphasis")}</em></motion.h1>
          <motion.p
            className="home-hero-lede"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.34, duration: 0.68 }}
          >{t("home.hero.lede")}</motion.p>
          <motion.div
            className="home-hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.44, duration: 0.68 }}
          >
            <ArrowLink className="is-primary">{t("home.hero.create")}</ArrowLink>
            <a className="home-text-link" href="#studio">{t("home.hero.howItWorks")} <Icon name="chevron-down" /></a>
          </motion.div>
          <div className="home-hero-note"><span>{t("home.hero.vectorFlowers")}</span><span>{t("home.hero.artStyles")}</span><span>{t("home.hero.noSignup")}</span></div>
        </motion.div>

        <motion.div
          className="home-hero-visual"
          style={{ y: heroArtY }}
          initial={reduceMotion ? false : { opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.16, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="home-hero-canvas">
            <div className="home-canvas-bar">
              <span><i /> {t("home.hero.canvasLabel")}</span>
              <span>1600 × 900</span>
            </div>
            <Artwork doc={HERO_DOC} />
          </div>
          <div className="home-palette-tag" aria-hidden="true">
            <span style={{ background: "#173f38" }} />
            <span style={{ background: "#ce4f6d" }} />
            <span style={{ background: "#e5a426" }} />
            <span style={{ background: "#fcf4e3" }} />
          </div>
        </motion.div>

        <a className="home-scroll-cue" href="#styles"><span>{t("home.hero.scroll")}</span><i /></a>
      </section>

      <div id="home-content">
        <section className="home-style-section" id="styles" aria-labelledby="styles-title">
          <Reveal className="home-section-intro home-style-intro">
            <p className="home-kicker is-light">{t("home.styles.kicker")}</p>
            <h2 id="styles-title">{t("home.styles.titleLine")}<br /><em>{t("home.styles.titleEmphasis")}</em></h2>
            <p>{t("home.styles.description")}</p>
          </Reveal>

          <div className="home-style-rail" role="group" aria-label={t("home.styles.groupLabel")}>
            {FLOWER_STYLES.map((style, index) => {
              const active = style === activeStyle
              return (
                <motion.button
                  type="button"
                  className={`home-style-card is-${style}${active ? " is-active" : ""}`}
                  key={style}
                  onClick={() => setActiveStyle(style)}
                  aria-pressed={active}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="home-style-number">0{index + 1}</span>
                  <svg viewBox="0 0 512 512" aria-hidden="true"><FlowerArt id={STYLE_FLOWERS[style]} /></svg>
                  <span className="home-style-copy">
                    <strong>{t(flowerStyleNameKeys[style])}</strong>
                    <small>{t(flowerStyleDescriptionKeys[style])}</small>
                  </span>
                  <span className="home-style-count">{tp("flower.count", 15, { count: number(15) })}</span>
                </motion.button>
              )
            })}
          </div>
          <div className="home-style-footer">
            <p>{t("home.styles.selected", { style: t(flowerStyleNameKeys[activeStyle]) })}</p>
            <Link to="/editor">{t("home.styles.browse")} <Icon name="arrow-right" /></Link>
          </div>
        </section>

        <section className="home-lab" id="customize" aria-labelledby="lab-title">
          <div className="home-lab-visual" aria-label={t("home.lab.previewLabel")}>
            <div className="home-lab-grid" aria-hidden="true" />
            <span className="home-lab-coordinate is-x">X 800</span>
            <span className="home-lab-coordinate is-y">Y 450</span>
            <motion.svg
              className="home-lab-flower"
              viewBox="0 0 512 512"
              role="img"
              aria-label={t("home.lab.flowerPreview", {
                style: t(flowerStyleNameKeys.botanical),
                species: t(flowerSpeciesKeys.rose),
                palette: t(LAB_PALETTES[palette]!.labelKey),
              })}
              style={labFlowerStyle}
              animate={{ opacity: 1 }}
            >
              <FlowerArt id="botanical-rose" colors={LAB_PALETTES[palette]!.colors} />
            </motion.svg>
            <span className="home-lab-selection" aria-hidden="true"><i /><i /><i /><i /></span>
          </div>

          <Reveal className="home-lab-panel">
            <p className="home-kicker">{t("home.lab.kicker")}</p>
            <h2 id="lab-title">{t("home.lab.titleLine")}<br /><em>{t("home.lab.titleEmphasis")}</em></h2>
            <p className="home-lab-lede">{t("home.lab.description")}</p>

            <fieldset className="home-palette-field">
              <legend>{t("home.lab.paletteLegend")}</legend>
              <div className="home-palette-options">
                {LAB_PALETTES.map((item, index) => (
                  <button
                    type="button"
                    className={palette === index ? "is-active" : ""}
                    key={item.id}
                    onClick={() => setPalette(index)}
                    aria-label={t("home.lab.usePalette", { palette: t(item.labelKey) })}
                    aria-pressed={palette === index}
                  >
                    <span>{item.colors.slice(0, 4).map((color) => <i key={color} style={{ background: color }} />)}</span>
                    <small>{t(item.labelKey)}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="home-lab-range">
              <span><b>{t("home.lab.size")}</b><output>{number(labSize)}%</output></span>
              <input type="range" min="68" max="108" value={labSize} onChange={(event) => setLabSize(Number(event.target.value))} />
            </label>
            <label className="home-lab-range">
              <span><b>{t("home.lab.rotation")}</b><output>{number(labRotation)}°</output></span>
              <input type="range" min="-30" max="30" value={labRotation} onChange={(event) => setLabRotation(Number(event.target.value))} />
            </label>
            <Link className="home-inline-link" to="/editor">{t("home.lab.customize")} <Icon name="arrow-right" /></Link>
          </Reveal>
        </section>

        <section className="home-studio-section" id="studio" aria-labelledby="studio-title">
          <Reveal className="home-section-intro home-studio-intro">
            <p className="home-kicker">{t("home.studio.kicker")}</p>
            <h2 id="studio-title">{t("home.studio.titleLine")}<br /><em>{t("home.studio.titleEmphasis")}</em></h2>
            <p>{t("home.studio.description")}</p>
          </Reveal>

          <Reveal className="home-studio">
            <div className="home-studio-head">
              <Brand />
              <div><span><Icon name="undo" /></span><span><Icon name="redo" /></span><Link to="/editor">{t("home.studio.openEditor")} <Icon name="arrow-right" /></Link></div>
            </div>
            <div className="home-studio-work">
              <div className="home-studio-stage">
                <motion.div
                  key={studioIndex}
                  className="home-studio-canvas"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Artwork doc={studioDoc} />
                </motion.div>
                <span className="home-studio-meta">1600 × 900px <i /> {t("home.studio.savedLocally")}</span>
              </div>
              <aside className="home-studio-panel" aria-label={t("home.studio.controlsLabel")}>
                <div className="home-preview-group">
                  <p><Icon name="sparkle" /> {t("home.studio.composition")}</p>
                  <button type="button" className="home-randomize" onClick={randomizeStudio}><Icon name="sparkle" /> {t("home.studio.randomize")}</button>
                  <label className="home-lab-range">
                    <span><b>{t("home.studio.density")}</b><output>{number(density)}%</output></span>
                    <input type="range" min="18" max="86" value={density} onChange={(event) => setDensity(Number(event.target.value))} />
                  </label>
                  <div className="home-preview-note"><Icon name="info" /> {t("home.studio.editableNote")}</div>
                </div>
                <div className="home-preview-group is-collapsed"><p><Icon name="flower" /> {t("home.studio.flowers")} <Icon name="chevron-right" /></p></div>
                <div className="home-preview-group is-collapsed"><p><Icon name="ratio" /> {t("home.studio.canvasSize")} <Icon name="chevron-right" /></p></div>
                <div className="home-preview-group is-collapsed"><p><Icon name="palette" /> {t("home.studio.background")} <Icon name="chevron-right" /></p></div>
                <div className="home-preview-group is-collapsed"><p><Icon name="layers" /> {t("home.studio.layers", { count: number(studioDoc.items.length) })} <Icon name="chevron-right" /></p></div>
              </aside>
            </div>
          </Reveal>

          <div className="home-capability-strip" aria-label={t("home.capabilities.label")}>
            <span><Icon name="move" /> {t("home.capabilities.transform")}</span>
            <span><Icon name="palette" /> {t("home.capabilities.recolor")}</span>
            <span><Icon name="layers" /> {t("home.capabilities.layers")}</span>
            <span><Icon name="download" /> {t("home.capabilities.export")}</span>
          </div>
        </section>

        <section className="home-ratios" aria-labelledby="ratios-title">
          <Reveal className="home-ratios-copy">
            <p className="home-kicker is-light">{t("home.ratios.kicker")}</p>
            <h2 id="ratios-title">{t("home.ratios.titleLine")}<br /><em>{t("home.ratios.titleEmphasis")}</em></h2>
            <p>{t("home.ratios.description")}</p>
            <div className="home-format-row"><span>JPG</span><span>PNG</span><span>SVG</span></div>
          </Reveal>
          <div className="home-ratio-gallery">
            <motion.figure className="home-ratio-art is-desktop" initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : .65 }}>
              <Artwork doc={DESKTOP_DOC} />
              <figcaption><strong>16:9</strong><span>{t("home.ratios.desktop")}</span></figcaption>
            </motion.figure>
            <motion.figure className="home-ratio-art is-square" initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: reduceMotion ? 0 : .12, duration: reduceMotion ? 0 : .65 }}>
              <Artwork doc={SQUARE_DOC} />
              <figcaption><strong>1:1</strong><span>{t("home.ratios.square")}</span></figcaption>
            </motion.figure>
            <motion.figure className="home-ratio-art is-phone" initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: reduceMotion ? 0 : .22, duration: reduceMotion ? 0 : .65 }}>
              <Artwork doc={PHONE_DOC} />
              <figcaption><strong>9:16</strong><span>{t("home.ratios.phone")}</span></figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="home-final" aria-labelledby="final-title">
          <div className="home-final-flower-field" aria-hidden="true">
            <svg className="is-one" viewBox="0 0 512 512"><FlowerArt id="line-art-chrysanthemum" /></svg>
            <svg className="is-two" viewBox="0 0 512 512"><FlowerArt id="retro-camellia" /></svg>
            <svg className="is-three" viewBox="0 0 512 512"><FlowerArt id="origami-anemone" /></svg>
            <svg className="is-four" viewBox="0 0 512 512"><FlowerArt id="botanical-daisy" /></svg>
          </div>
          <Reveal className="home-final-copy">
            <p className="home-kicker is-light">{t("home.final.kicker")}</p>
            <h2 id="final-title">{t("home.final.titleLine")}<br /><em>{t("home.final.titleEmphasis")}</em></h2>
            <p>{t("home.final.description")}</p>
            <ArrowLink className="is-final">{t("home.final.openStudio")}</ArrowLink>
          </Reveal>
        </section>

        <footer className="home-footer">
          <Link to="/" aria-label={t("common.flowchartHome")}><Brand /></Link>
          <p>{t("home.footer.tagline")}</p>
          <div><a href="#top">{t("home.footer.backToTop")} <Icon name="arrow-right" /></a><LanguageSelector /><ThemeToggle /></div>
        </footer>
      </div>
    </main>
  )
}

export default Home
