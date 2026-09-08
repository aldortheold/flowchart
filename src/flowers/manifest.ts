import * as Botanical from "../assets/botanical";
import * as LineArt from "../assets/line-art";
import * as Minimal from "../assets/minimal";
import * as Origami from "../assets/origami";
import * as Retro from "../assets/retro";
import { FLOWER_PALETTES, FLOWER_SLOTS } from "./palettes";
import {
    FLOWER_IDS,
    FLOWER_SPECIES,
    FLOWER_STYLES,
    isFlowerId,
    type FlowerAsset,
    type FlowerId,
    type FlowerSpecies,
    type FlowerStyle,
} from "./types";

type FlowerComponents = typeof Botanical;

const ART_BY_STYLE = {
    botanical: Botanical,
    minimal: Minimal,
    "line-art": LineArt,
    origami: Origami,
    retro: Retro,
} satisfies Record<FlowerStyle, FlowerComponents>;

const COMPONENT_BY_SPECIES = {
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
    "forget-me-not": "ForgetMeNot",
} as const satisfies Record<FlowerSpecies, keyof FlowerComponents>;

export const FLOWERS: FlowerAsset[] = FLOWER_STYLES.flatMap((style) =>
    FLOWER_SPECIES.map((species) => {
        const id: FlowerId = `${style}-${species}`;
        return {
            id,
            style,
            species,
            slots: [...FLOWER_SLOTS[id]],
            colors: [...FLOWER_PALETTES[id]],
            art: ART_BY_STYLE[style][COMPONENT_BY_SPECIES[species]],
        };
    }),
);

export const FLOWER_MAP = Object.fromEntries(
    FLOWERS.map((flower) => [flower.id, flower]),
) as Record<FlowerId, FlowerAsset>;

export { FLOWER_IDS, isFlowerId };

export function getFlower(id: FlowerId) {
    return FLOWER_MAP[id];
}
