import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    15.999995312501,
    15.999995312501,
    495.999845312548,
    495.999845312548,
]);

function Anemone({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-anemone", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 73 C -39.96 63 -108.78 -61.1 -111 -126.9 C -113.22 -188 -53.28 -235 0 -235 C 53.28 -235 113.22 -188 111 -126.9 C 108.78 -61.1 39.96 63 0 73 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="100" fill={c[4]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="57" fill={c[5]}/>
                    <circle cx="256" cy="178" r="6.5" fill={c[6]}/>
                    <circle cx="285.849" cy="183.937" r="6.5" fill={c[6]}/>
                    <circle cx="311.154" cy="200.846" r="6.5" fill={c[6]}/>
                    <circle cx="328.063" cy="226.151" r="6.5" fill={c[6]}/>
                    <circle cx="334" cy="256" r="6.5" fill={c[6]}/>
                    <circle cx="328.063" cy="285.849" r="6.5" fill={c[6]}/>
                    <circle cx="311.154" cy="311.154" r="6.5" fill={c[6]}/>
                    <circle cx="285.849" cy="328.063" r="6.5" fill={c[6]}/>
                    <circle cx="256" cy="334" r="6.5" fill={c[6]}/>
                    <circle cx="226.151" cy="328.063" r="6.5" fill={c[6]}/>
                    <circle cx="200.846" cy="311.154" r="6.5" fill={c[6]}/>
                    <circle cx="183.937" cy="285.849" r="6.5" fill={c[6]}/>
                    <circle cx="178" cy="256" r="6.5" fill={c[6]}/>
                    <circle cx="183.937" cy="226.151" r="6.5" fill={c[6]}/>
                    <circle cx="200.846" cy="200.846" r="6.5" fill={c[6]}/>
                    <circle cx="226.151" cy="183.937" r="6.5" fill={c[6]}/>
            </g>
        </>
    );
}

export default Anemone;
