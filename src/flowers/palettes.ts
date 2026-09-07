import type { FlowerId } from "./types"

export const FLOWER_PALETTES = {
    "botanical-rose": [
        "#e8687b",
        "#d94c67",
        "#bd3455",
        "#f1848e",
        "#df5970",
        "#a92d4d",
        "#762943",
        "#f8a9af",
    ],
    "botanical-tulip": [
        "#f2787f",
        "#df5569",
        "#c63c59",
        "#fc918a",
        "#e96273",
        "#81324f",
        "#f3c75a",
        "#ffaaa2",
    ],
    "botanical-daisy": [
        "#fff9e8",
        "#e7ebdf",
        "#d5dfd5",
        "#bd782d",
        "#e1a534",
        "#efbd48",
        "#ffd76a",
        "#fff1a6",
    ],
    "minimal-rose": ["#cf3b5c", "#ee5b72", "#b72c50", "#fb8290"],
    "minimal-tulip": ["#ff7d76", "#e94d61", "#c92f51", "#9f2748", "#f5b949"],
    "minimal-daisy": ["#fff3cf", "#e7a52e", "#f6ca50"],
} as const satisfies Record<FlowerId, readonly string[]>

export const FLOWER_SLOTS = {
    "botanical-rose": [
        "Outer petals · light",
        "Outer petals · mid",
        "Outer petals · shade",
        "Inner petals · light",
        "Inner petals · mid",
        "Inner petals · shade",
        "Centre",
        "Petal highlight",
    ],
    "botanical-tulip": [
        "Outer petals · light",
        "Outer petals · mid",
        "Outer petals · shade",
        "Inner petals · light",
        "Inner petals · mid",
        "Centre",
        "Stamens",
        "Petal highlight",
    ],
    "botanical-daisy": [
        "Outer petals",
        "Outer petal shade",
        "Inner petals",
        "Centre · outer",
        "Centre · mid",
        "Centre · light",
        "Pollen",
        "Pollen highlight",
    ],
    "minimal-rose": ["Outer petals", "Middle petals", "Inner petals", "Highlight"],
    "minimal-tulip": ["Petals · light", "Petals · mid", "Petals · shade", "Centre", "Stamens"],
    "minimal-daisy": ["Petals", "Centre", "Highlight"],
} as const satisfies Record<FlowerId, readonly string[]>

export function resolveColors(id: FlowerId, colors?: readonly string[]) {
    return FLOWER_PALETTES[id].map((base, i) => colors?.[i]?.trim() || base)
}

export function newPalette(id: FlowerId) {
    return [...FLOWER_PALETTES[id]]
}
