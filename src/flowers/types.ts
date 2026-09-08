import type { ComponentType } from "react";

export const FLOWER_STYLES = [
    "botanical",
    "minimal",
    "line-art",
    "origami",
    "retro",
] as const;

export type FlowerStyle = typeof FLOWER_STYLES[number];

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
    slots: string[];
    colors: string[];
    art: ComponentType<FlowerProps>;
};
