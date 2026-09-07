import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    86.259020858,
    60,
    425.740979142,
    452,
]);

function Tulip({ colors }: FlowerProps) {

    const petalId = useId();
    const c = resolveColors("minimal-tulip", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M256 278 C213 225 216 125 256 60 C296 125 299 225 256 278 Z" />
            </defs>
            <g transform={NEW_VIEWBOX}>
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(0 256 256)" />
                <use href={`#${petalId}`} fill={c[1]} transform="rotate(60 256 256)" />
                <use href={`#${petalId}`} fill={c[2]} transform="rotate(120 256 256)" />
                <use href={`#${petalId}`} fill={c[2]} transform="rotate(180 256 256)" />
                <use href={`#${petalId}`} fill={c[1]} transform="rotate(240 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(300 256 256)" />
                <circle cx="256" cy="256" r="59" fill={c[3]} />
                <circle cx="256" cy="256" r="26" fill={c[4]} />
            </g>
        </>
    );
}

export default Tulip;
