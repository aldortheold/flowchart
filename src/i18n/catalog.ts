import type { FlowerSpecies, FlowerStyle } from "../flowers"
import type { PatternId } from "../editor/types"
import type { MessageKey } from "./resources"

export const flowerStyleNameKeys = {
  botanical: "flower.style.botanical.name",
  minimal: "flower.style.minimal.name",
  "line-art": "flower.style.line-art.name",
  origami: "flower.style.origami.name",
  retro: "flower.style.retro.name",
} as const satisfies Record<FlowerStyle, MessageKey>

export const flowerStyleDescriptionKeys = {
  botanical: "flower.style.botanical.description",
  minimal: "flower.style.minimal.description",
  "line-art": "flower.style.line-art.description",
  origami: "flower.style.origami.description",
  retro: "flower.style.retro.description",
} as const satisfies Record<FlowerStyle, MessageKey>

export const flowerSpeciesKeys = {
  rose: "flower.species.rose",
  tulip: "flower.species.tulip",
  daisy: "flower.species.daisy",
  sunflower: "flower.species.sunflower",
  lotus: "flower.species.lotus",
  orchid: "flower.species.orchid",
  hibiscus: "flower.species.hibiscus",
  poppy: "flower.species.poppy",
  peony: "flower.species.peony",
  chrysanthemum: "flower.species.chrysanthemum",
  dahlia: "flower.species.dahlia",
  camellia: "flower.species.camellia",
  anemone: "flower.species.anemone",
  narcissus: "flower.species.narcissus",
  "forget-me-not": "flower.species.forget-me-not",
} as const satisfies Record<FlowerSpecies, MessageKey>

export const colorSlotKeys = {
  "outer-petals-light": "flower.slot.outerPetalsLight",
  "outer-petals-mid": "flower.slot.outerPetalsMid",
  "outer-petals-shade": "flower.slot.outerPetalsShade",
  "inner-petals-light": "flower.slot.innerPetalsLight",
  "inner-petals-mid": "flower.slot.innerPetalsMid",
  "inner-petals-shade": "flower.slot.innerPetalsShade",
  centre: "flower.slot.centre",
  "petal-highlight": "flower.slot.petalHighlight",
  stamens: "flower.slot.stamens",
  "outer-petals": "flower.slot.outerPetals",
  "outer-petal-shade": "flower.slot.outerPetalShade",
  "inner-petals": "flower.slot.innerPetals",
  "centre-outer": "flower.slot.centreOuter",
  "centre-mid": "flower.slot.centreMid",
  "centre-light": "flower.slot.centreLight",
  pollen: "flower.slot.pollen",
  "pollen-highlight": "flower.slot.pollenHighlight",
  "middle-petals": "flower.slot.middlePetals",
  highlight: "flower.slot.highlight",
  "petals-light": "flower.slot.petalsLight",
  "petals-mid": "flower.slot.petalsMid",
  "petals-shade": "flower.slot.petalsShade",
  petals: "flower.slot.petals",
} as const satisfies Record<string, MessageKey>

export const patternNameKeys = {
  petals: "editor.background.pattern.petals",
  trellis: "editor.background.pattern.trellis",
  dots: "editor.background.pattern.dots",
} as const satisfies Record<PatternId, MessageKey>
