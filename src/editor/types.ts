import type { FlowerId } from "../flowers/types";

export type Ratio = "16:9" | "9:16" | "4:3" | "1:1" | "custom";

export type PatternId = "petals" | "trellis" | "dots";

export type Bg =
    | { kind: "transparent" }
    | { kind: "solid"; color: string }
    | { kind: "gradient"; a: string; b: string; angle: number }
    | {
        kind: "pattern";
        id: PatternId;
        base: string;
        ink: string;
        scale: number;
        opacity: number;
    };

export interface Canvas {
    w: number;
    h: number;
    ratio: Ratio;
}

export interface Gen {
    pool: FlowerId[];
    /** Fullness from 0 (empty) to 100 (dense). */
    density: number;
    /** Dimensionless multiplier used by the composition generator. */
    size: number;
    /** Unsigned 32-bit seed. */
    seed: number;
}

export interface FlowerItem {
    id: string;
    asset: FlowerId;
    /** Centre position in canvas units. */
    x: number;
    /** Centre position in canvas units. */
    y: number;
    /** Square edge length in canvas units. */
    size: number;
    /** Clockwise rotation in degrees. */
    rot: number;
    /** Per-instance fills, ordered to match the asset's semantic slots. */
    colors: string[];
    hidden: boolean;
}

export interface Doc {
    v: 1;
    canvas: Canvas;
    bg: Bg;
    gen: Gen;
    /** Back-to-front paint order. */
    items: FlowerItem[];
}
