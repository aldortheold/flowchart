import type {
    Bg,
    Canvas,
    Doc,
    FlowerItem,
    Gen,
    PatternId,
    Ratio,
} from "./types.ts";
import { isFlowerId, type FlowerId } from "../flowers/types.ts";

export const MIN_SIDE = 64;
export const MAX_SIDE = 8192;
export const MAX_PIXELS = 16_777_216;
export const MIN_VISIBLE = 32;
export const MAX_ITEMS = 1000;
export type SizeError = "integer" | "range" | "area";

const MAX_ITEM_SIZE = MAX_SIDE * 4;
const MAX_POOL = 128;
const MAX_COLORS = 64;
const MAX_ID_LEN = 128;
const UINT32_MAX = 0xffff_ffff;

const ratios = new Set<Ratio>(["16:9", "9:16", "4:3", "1:1", "custom"]);
const patterns = new Set<PatternId>(["petals", "trellis", "dots"]);
const colorRe = /^#[\da-f]{6}$/i;

type Obj = Record<string, unknown>;

function obj(value: unknown): value is Obj {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function num(value: unknown): value is number {
    return typeof value === "number" && Number.isFinite(value);
}

function text(value: unknown, max = MAX_ID_LEN): value is string {
    return typeof value === "string" && value.length > 0 && value.length <= max;
}

function color(value: unknown): value is string {
    return typeof value === "string" && colorRe.test(value);
}

function ratio(value: unknown): value is Ratio {
    return typeof value === "string" && ratios.has(value as Ratio);
}

function pattern(value: unknown): value is PatternId {
    return typeof value === "string" && patterns.has(value as PatternId);
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function bgFrom(value: unknown): Bg | null {
    if (!obj(value) || typeof value.kind !== "string") return null;

    if (value.kind === "transparent") return { kind: "transparent" };

    if (value.kind === "solid" && color(value.color)) {
        return { kind: "solid", color: value.color };
    }

    if (
        value.kind === "gradient"
        && color(value.a)
        && color(value.b)
        && num(value.angle)
        && value.angle >= 0
        && value.angle <= 360
    ) {
        return { kind: "gradient", a: value.a, b: value.b, angle: value.angle };
    }

    if (
        value.kind === "pattern"
        && pattern(value.id)
        && color(value.base)
        && color(value.ink)
        && num(value.scale)
        && value.scale >= 0.25
        && value.scale <= 4
        && num(value.opacity)
        && value.opacity >= 0
        && value.opacity <= 1
    ) {
        return {
            kind: "pattern",
            id: value.id,
            base: value.base,
            ink: value.ink,
            scale: value.scale,
            opacity: value.opacity,
        };
    }

    return null;
}

function canvasFrom(value: unknown): Canvas | null {
    if (!obj(value)) return null;
    const { w, h, ratio: savedRatio } = value;
    if (!num(w) || !num(h) || !validSize(w, h) || !ratio(savedRatio)) return null;
    return { w, h, ratio: savedRatio };
}

function genFrom(value: unknown): Gen | null {
    if (
        !obj(value)
        || !Array.isArray(value.pool)
        || value.pool.length > MAX_POOL
        || !value.pool.every(isFlowerId)
        || new Set(value.pool).size !== value.pool.length
        || !num(value.density)
        || value.density < 0
        || value.density > 100
        || !num(value.size)
        || value.size < 0.6
        || value.size > 1.6
        || !num(value.seed)
        || !Number.isInteger(value.seed)
        || value.seed < 0
        || value.seed > UINT32_MAX
    ) {
        return null;
    }

    return {
        pool: [...value.pool] as FlowerId[],
        density: value.density,
        size: value.size,
        seed: value.seed,
    };
}

function colorsFrom(value: unknown): string[] | null {
    if (!Array.isArray(value) || value.length > MAX_COLORS || !value.every(color)) return null;
    return [...value];
}

function itemFrom(value: unknown, canvas: Canvas): FlowerItem | null {
    if (
        !obj(value)
        || !text(value.id)
        || !isFlowerId(value.asset)
        || !num(value.x)
        || !num(value.y)
        || !num(value.size)
        || value.size <= 0
        || value.size > MAX_ITEM_SIZE
        || !num(value.rot)
        || typeof value.hidden !== "boolean"
    ) {
        return null;
    }

    const colors = colorsFrom(value.colors);
    if (!colors) return null;

    return clampItem({
        id: value.id,
        asset: value.asset,
        x: value.x,
        y: value.y,
        size: value.size,
        rot: ((value.rot % 360) + 360) % 360,
        colors,
        hidden: value.hidden,
    }, canvas);
}

function sameColors(a: readonly string[], b: readonly string[]) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

function sameBg(a: Bg, b: Bg) {
    if (a.kind !== b.kind) return false;
    switch (a.kind) {
        case "transparent":
            return true;
        case "solid":
            return b.kind === "solid" && a.color === b.color;
        case "gradient":
            return b.kind === "gradient" && a.a === b.a && a.b === b.b && a.angle === b.angle;
        case "pattern":
            return b.kind === "pattern"
                && a.id === b.id
                && a.base === b.base
                && a.ink === b.ink
                && a.scale === b.scale
                && a.opacity === b.opacity;
    }
}

export function validSize(w: unknown, h: unknown): boolean {
    return num(w)
        && num(h)
        && Number.isInteger(w)
        && Number.isInteger(h)
        && w >= MIN_SIDE
        && h >= MIN_SIDE
        && w <= MAX_SIDE
        && h <= MAX_SIDE
        && w * h <= MAX_PIXELS;
}

export function sizeError(w: unknown, h: unknown): SizeError | null {
    if (!num(w) || !num(h) || !Number.isInteger(w) || !Number.isInteger(h)) {
        return "integer";
    }
    if (w < MIN_SIDE || h < MIN_SIDE || w > MAX_SIDE || h > MAX_SIDE) {
        return "range";
    }
    if (w * h > MAX_PIXELS) {
        return "area";
    }
    return null;
}

export function makeDoc(pool: readonly FlowerId[] = []): Doc {
    return {
        v: 1,
        canvas: { w: 1600, h: 900, ratio: "16:9" },
        bg: { kind: "solid", color: "#f7f7f2" },
        gen: {
            pool: [...new Set(pool)].slice(0, MAX_POOL),
            density: 46,
            size: 1,
            seed: 1,
        },
        items: [],
    };
}

export function cloneDoc(doc: Doc): Doc {
    const bg: Bg = doc.bg.kind === "transparent"
        ? { kind: "transparent" }
        : doc.bg.kind === "solid"
            ? { ...doc.bg }
            : doc.bg.kind === "gradient"
                ? { ...doc.bg }
                : { ...doc.bg };

    return {
        v: 1,
        canvas: { ...doc.canvas },
        bg,
        gen: { ...doc.gen, pool: [...doc.gen.pool] },
        items: doc.items.map((item) => ({ ...item, colors: [...item.colors] })),
    };
}

export function sameDoc(a: Doc, b: Doc): boolean {
    if (a === b) return true;
    if (
        a.v !== b.v
        || a.canvas.w !== b.canvas.w
        || a.canvas.h !== b.canvas.h
        || a.canvas.ratio !== b.canvas.ratio
        || !sameBg(a.bg, b.bg)
        || a.gen.density !== b.gen.density
        || a.gen.size !== b.gen.size
        || a.gen.seed !== b.gen.seed
        || a.gen.pool.length !== b.gen.pool.length
        || a.gen.pool.some((id, index) => id !== b.gen.pool[index])
        || a.items.length !== b.items.length
    ) {
        return false;
    }

    return a.items.every((item, index) => {
        const other = b.items[index];
        return other !== undefined
            && item.id === other.id
            && item.asset === other.asset
            && item.x === other.x
            && item.y === other.y
            && item.size === other.size
            && item.rot === other.rot
            && item.hidden === other.hidden
            && sameColors(item.colors, other.colors);
    });
}

export function clampItem(item: FlowerItem, canvas: Pick<Canvas, "w" | "h">, visible = MIN_VISIBLE): FlowerItem {
    if (!num(canvas.w) || !num(canvas.h) || canvas.w <= 0 || canvas.h <= 0) {
        return { ...item, colors: [...item.colors] };
    }

    const half = item.size / 2;
    const shown = Math.min(Math.max(1, visible), item.size, canvas.w / 2, canvas.h / 2);
    const minX = shown - half;
    const maxX = canvas.w - shown + half;
    const minY = shown - half;
    const maxY = canvas.h - shown + half;

    return {
        ...item,
        x: clamp(item.x, minX, maxX),
        y: clamp(item.y, minY, maxY),
        colors: [...item.colors],
    };
}

export function resizeDoc(doc: Doc, w: number, h: number, nextRatio: Ratio = "custom"): Doc {
    const error = sizeError(w, h);
    if (error) throw new RangeError(`invalid-canvas-size:${error}`);
    if (!ratio(nextRatio)) throw new RangeError("invalid-canvas-ratio");

    const sx = w / doc.canvas.w;
    const sy = h / doc.canvas.h;
    const sizeScale = Math.sqrt(sx * sy);
    const canvas: Canvas = { w, h, ratio: nextRatio };
    const items = doc.items.map((item) => clampItem({
        ...item,
        x: item.x * sx,
        y: item.y * sy,
        size: Math.min(MAX_ITEM_SIZE, item.size * sizeScale),
        colors: [...item.colors],
    }, canvas));

    return {
        ...cloneDoc(doc),
        canvas,
        items,
    };
}

export function parseDoc(raw: unknown): Doc | null {
    let value = raw;
    if (typeof raw === "string") {
        if (!raw.trim()) return null;
        try {
            value = JSON.parse(raw) as unknown;
        } catch {
            return null;
        }
    }

    if (!obj(value) || value.v !== 1) return null;
    const canvas = canvasFrom(value.canvas);
    const bg = bgFrom(value.bg);
    const gen = genFrom(value.gen);
    if (!canvas || !bg || !gen || !Array.isArray(value.items) || value.items.length > MAX_ITEMS) {
        return null;
    }

    const items: FlowerItem[] = [];
    const ids = new Set<string>();
    for (const entry of value.items) {
        const item = itemFrom(entry, canvas);
        if (!item || ids.has(item.id)) return null;
        ids.add(item.id);
        items.push(item);
    }

    return { v: 1, canvas, bg, gen, items };
}
