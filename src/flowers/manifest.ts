import BotanicalDaisy from "../assets/botanical/Daisy"
import BotanicalRose from "../assets/botanical/Rose"
import BotanicalTulip from "../assets/botanical/Tulip"
import MinimalDaisy from "../assets/minimal/Daisy"
import MinimalRose from "../assets/minimal/Rose"
import MinimalTulip from "../assets/minimal/Tulip"
import { FLOWER_PALETTES, FLOWER_SLOTS } from "./palettes"
import { FLOWER_IDS, isFlowerId, type FlowerAsset, type FlowerId } from "./types"

export const FLOWERS: FlowerAsset[] = [
    {
        id: "botanical-rose",
        style: "botanical",
        species: "rose",
        name: "Rose",
        slots: [...FLOWER_SLOTS["botanical-rose"]],
        colors: [...FLOWER_PALETTES["botanical-rose"]],
        art: BotanicalRose,
    },
    {
        id: "botanical-tulip",
        style: "botanical",
        species: "tulip",
        name: "Tulip",
        slots: [...FLOWER_SLOTS["botanical-tulip"]],
        colors: [...FLOWER_PALETTES["botanical-tulip"]],
        art: BotanicalTulip,
    },
    {
        id: "botanical-daisy",
        style: "botanical",
        species: "daisy",
        name: "Daisy",
        slots: [...FLOWER_SLOTS["botanical-daisy"]],
        colors: [...FLOWER_PALETTES["botanical-daisy"]],
        art: BotanicalDaisy,
    },
    {
        id: "minimal-rose",
        style: "minimal",
        species: "rose",
        name: "Rose",
        slots: [...FLOWER_SLOTS["minimal-rose"]],
        colors: [...FLOWER_PALETTES["minimal-rose"]],
        art: MinimalRose,
    },
    {
        id: "minimal-tulip",
        style: "minimal",
        species: "tulip",
        name: "Tulip",
        slots: [...FLOWER_SLOTS["minimal-tulip"]],
        colors: [...FLOWER_PALETTES["minimal-tulip"]],
        art: MinimalTulip,
    },
    {
        id: "minimal-daisy",
        style: "minimal",
        species: "daisy",
        name: "Daisy",
        slots: [...FLOWER_SLOTS["minimal-daisy"]],
        colors: [...FLOWER_PALETTES["minimal-daisy"]],
        art: MinimalDaisy,
    },
]

export const FLOWER_MAP = Object.fromEntries(
    FLOWERS.map((flower) => [flower.id, flower]),
) as Record<FlowerId, FlowerAsset>

export { FLOWER_IDS, isFlowerId }

export function getFlower(id: FlowerId) {
    return FLOWER_MAP[id]
}
