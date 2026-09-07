import { getFlower } from "./manifest"
import type { FlowerId, FlowerProps } from "./types"

export type FlowerArtProps = FlowerProps & {
    id: FlowerId
}

export function FlowerArt({ id, colors }: FlowerArtProps) {
    const Art = getFlower(id).art

    return <Art colors={colors} />
}
