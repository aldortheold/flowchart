import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    18.000004648439,
    18.000004648439,
    494.000116210965,
    494.000116210965,
]);

function Daisy({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-daisy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 78 C -21.24 68 -57.82 -60.58 -59 -125.82 C -60.18 -186.4 -28.32 -233 0 -233 C 28.32 -233 60.18 -186.4 59 -125.82 C 57.82 -60.58 21.24 68 0 78 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="91" fill={c[3]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="55" fill={c[4]}/>
                    <circle cx="256" cy="191" r="6" fill={c[1]}/>
                    <circle cx="301.962" cy="210.038" r="6" fill={c[1]}/>
                    <circle cx="321" cy="256" r="6" fill={c[1]}/>
                    <circle cx="301.962" cy="301.962" r="6" fill={c[1]}/>
                    <circle cx="256" cy="321" r="6" fill={c[1]}/>
                    <circle cx="210.038" cy="301.962" r="6" fill={c[1]}/>
                    <circle cx="191" cy="256" r="6" fill={c[1]}/>
                    <circle cx="210.038" cy="210.038" r="6" fill={c[1]}/>
            </g>
        </>
    );
}

export default Daisy;
