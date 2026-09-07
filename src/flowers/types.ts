import type { ComponentType } from "react"

export type FlowerStyle = "botanical" | "minimal"

export type FlowerSpecies = "rose" | "tulip" | "daisy"

export const FLOWER_IDS = [
    "botanical-rose",
    "botanical-tulip",
    "botanical-daisy",
    "minimal-rose",
    "minimal-tulip",
    "minimal-daisy",
] as const

export type FlowerId = typeof FLOWER_IDS[number]

export function isFlowerId(value: unknown): value is FlowerId {
    return typeof value === "string" && (FLOWER_IDS as readonly string[]).includes(value)
}

export type FlowerProps = {
    colors?: readonly string[]
}

export type FlowerAsset = {
    id: FlowerId
    style: FlowerStyle
    species: FlowerSpecies
    name: string
    slots: string[]
    colors: string[]
    art: ComponentType<FlowerProps>
}
