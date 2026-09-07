import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([72, 72, 440, 440]);

function Daisy({ colors }: FlowerProps) {

    const petalId = useId();
    const c = resolveColors("minimal-daisy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M256 229 C224 192 226 120 256 72 C286 120 288 192 256 229 Z" />
            </defs>
            <g transform={NEW_VIEWBOX}>
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(0 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(45 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(90 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(135 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(180 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(225 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(270 256 256)" />
                <use href={`#${petalId}`} fill={c[0]} transform="rotate(315 256 256)" />
                <circle cx="256" cy="256" r="78" fill={c[1]} />
                <circle cx="238" cy="232" r="30" fill={c[2]} />
            </g>
        </>
    );
}

export default Daisy;
