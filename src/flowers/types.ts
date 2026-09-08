import type { ComponentType } from "react";

export const FLOWER_STYLES = [
    "botanical",
    "minimal",
    "line-art",
    "origami",
    "retro",
] as const;

export type FlowerStyle = typeof FLOWER_STYLES[number];

export const FLOWER_STYLE_DETAILS = {
    botanical: { label: "Botanical", description: "Layered & organic" },
    minimal: { label: "Minimal", description: "Bold & simple" },
    "line-art": { label: "Line Art", description: "Clean & expressive" },
    origami: { label: "Origami", description: "Crisp & geometric" },
    retro: { label: "Retro", description: "Bold & vintage" },
} as const satisfies Record<FlowerStyle, { label: string; description: string }>;

export const FLOWER_SPECIES = [
    "rose",
    "tulip",
    "daisy",
    "sunflower",
    "lotus",
    "orchid",
    "hibiscus",
    "poppy",
    "peony",
    "chrysanthemum",
    "dahlia",
    "camellia",
    "anemone",
    "narcissus",
    "forget-me-not",
] as const;

export type FlowerSpecies = typeof FLOWER_SPECIES[number];

export const FLOWER_SPECIES_NAMES = {
    rose: "Rose",
    tulip: "Tulip",
    daisy: "Daisy",
    sunflower: "Sunflower",
    lotus: "Lotus",
    orchid: "Orchid",
    hibiscus: "Hibiscus",
    poppy: "Poppy",
    peony: "Peony",
    chrysanthemum: "Chrysanthemum",
    dahlia: "Dahlia",
    camellia: "Camellia",
    anemone: "Anemone",
    narcissus: "Narcissus",
    "forget-me-not": "Forget-me-not",
} as const satisfies Record<FlowerSpecies, string>;

export type FlowerId = `${FlowerStyle}-${FlowerSpecies}`;

export const FLOWER_IDS = FLOWER_STYLES.flatMap((style) =>
    FLOWER_SPECIES.map((species) => `${style}-${species}` as FlowerId),
);

const FLOWER_ID_SET = new Set<string>(FLOWER_IDS);

export function isFlowerId(value: unknown): value is FlowerId {
    return typeof value === "string" && FLOWER_ID_SET.has(value);
}

export type FlowerProps = {
    colors?: readonly string[];
};

export type FlowerAsset = {
    id: FlowerId;
    style: FlowerStyle;
    species: FlowerSpecies;
    name: string;
    slots: string[];
    colors: string[];
    art: ComponentType<FlowerProps>;
};
