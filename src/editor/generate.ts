import { FLOWER_MAP } from "../flowers/manifest"
import type { FlowerId } from "../flowers/types"
import { clampItem } from "./model"
import type { Doc, FlowerItem } from "./types"

function rand(seed: number) {
    let n = seed >>> 0

    return () => {
        n += 0x6d2b79f5
        let t = n
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

function uid(seed: number, i: number) {
    return `flower-${seed.toString(36)}-${i.toString(36)}`
}

function pick<T>(list: readonly T[], n: number) {
    return list[Math.floor(n * list.length)]!
}

export function generate(doc: Doc): Doc {
    const pool = doc.gen.pool.filter((id): id is FlowerId => id in FLOWER_MAP)
    const ids = pool.length ? pool : (Object.keys(FLOWER_MAP) as FlowerId[])
    const seed = (doc.gen.seed + 1) >>> 0
    const rnd = rand(seed)
    const count = Math.round(5 + (doc.gen.density / 100) * 31)
    const ratio = doc.canvas.w / doc.canvas.h
    const cols = Math.max(2, Math.round(Math.sqrt(count * ratio)))
    const rows = Math.ceil(count / cols)
    const cw = doc.canvas.w / cols
    const ch = doc.canvas.h / rows
    const base = Math.min(cw, ch)
    const items: FlowerItem[] = []

    for (let i = 0; i < count; i += 1) {
        const col = i % cols
        const row = Math.floor(i / cols)
        const asset = pick(ids, rnd())
        const size = Math.max(56, base * (0.78 + rnd() * 0.72) * doc.gen.size)
        const edge = rnd() < 0.24
        let x = (col + 0.5 + (rnd() - 0.5) * 0.78) * cw
        let y = (row + 0.5 + (rnd() - 0.5) * 0.78) * ch

        if (edge) {
            const side = Math.floor(rnd() * 4)
            if (side === 0) x = (rnd() - 0.35) * size
            if (side === 1) x = doc.canvas.w - (rnd() - 0.35) * size
            if (side === 2) y = (rnd() - 0.35) * size
            if (side === 3) y = doc.canvas.h - (rnd() - 0.35) * size
        }

        items.push(clampItem({
            id: uid(seed, i),
            asset,
            x,
            y,
            size,
            rot: Math.round(rnd() * 360),
            colors: [...FLOWER_MAP[asset].colors],
            hidden: false,
        }, doc.canvas))
    }

    return {
        ...doc,
        gen: { ...doc.gen, seed },
        items,
    }
}

export function overlapHigh(doc: Doc) {
    const list = doc.items.filter((item) => !item.hidden)
    if (doc.gen.density >= 84 || list.length < 3) return doc.gen.density >= 84

    let hits = 0
    let pairs = 0

    for (let i = 0; i < list.length; i += 1) {
        for (let j = i + 1; j < list.length; j += 1) {
            const a = list[i]!
            const b = list[j]!
            const dx = a.x - b.x
            const dy = a.y - b.y
            const reach = (a.size + b.size) * 0.34
            pairs += 1
            if (dx * dx + dy * dy < reach * reach) hits += 1
        }
    }

    return pairs > 0 && hits / pairs > 0.2
}

export function stylesMixed(doc: Doc) {
    const styles = new Set(doc.items
        .filter((item) => !item.hidden && FLOWER_MAP[item.asset])
        .map((item) => FLOWER_MAP[item.asset].style))
    return styles.size > 1
}
