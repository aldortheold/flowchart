import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    12.050004049953,
    12.050004049953,
    499.950175100891,
    499.950175100891,
]);

function Poppy({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-poppy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 72 C -61.32 64 -128.48 -59 -140.16 -108.56 C -163.52 -136.88 -131.4 -167.56 -102.2 -177 C -106.58 -214.76 -55.48 -240.72 -20.44 -219.48 C -7.3 -245.44 7.3 -245.44 20.44 -219.48 C 55.48 -240.72 106.58 -214.76 102.2 -177 C 131.4 -167.56 163.52 -136.88 140.16 -108.56 C 128.48 -59 61.32 64 0 72 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="77" fill={c[1]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="42" fill={c[4]}/>
                    <path d="M 256 198 L 266.332 231.055 L 297.012 214.988 L 280.945 245.668 L 314 256 L 280.945 266.332 L 297.012 297.012 L 266.332 280.945 L 256 314 L 245.668 280.945 L 214.988 297.012 L 231.055 266.332 L 198 256 L 231.055 245.668 L 214.988 214.988 L 245.668 231.055 Z" fill={c[5]}/>
            </g>
        </>
    );
}

export default Poppy;
