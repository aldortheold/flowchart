import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    21.616907260291,
    13.062503274622,
    490.383072597413,
    475.574630667806,
]);

function Hibiscus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-hibiscus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 70 C -50.82 62 -106.48 -58.75 -116.16 -108.1 C -135.52 -136.3 -108.9 -166.85 -84.7 -176.25 C -88.33 -213.85 -45.98 -239.7 -16.94 -218.55 C -6.05 -244.4 6.05 -244.4 16.94 -218.55 C 45.98 -239.7 88.33 -213.85 84.7 -176.25 C 108.9 -166.85 135.52 -136.3 116.16 -108.1 C 106.48 -58.75 50.82 62 0 70 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <path d="M 256 169 L 277.748 226.066 L 338.742 229.116 L 291.189 267.434 L 307.137 326.384 L 256 293 L 204.863 326.384 L 220.811 267.434 L 173.258 229.116 L 234.252 226.066 Z" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round"/>
                    <circle cx="256" cy="256" r="34" fill={c[5]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="15" fill={c[6]}/>
                    <circle cx="256" cy="195" r="7" fill={c[5]}/>
                    <circle cx="291.855" cy="206.65" r="7" fill={c[5]}/>
                    <circle cx="314.014" cy="237.15" r="7" fill={c[5]}/>
                    <circle cx="314.014" cy="274.85" r="7" fill={c[5]}/>
                    <circle cx="291.855" cy="305.35" r="7" fill={c[5]}/>
                    <circle cx="256" cy="317" r="7" fill={c[5]}/>
                    <circle cx="220.145" cy="305.35" r="7" fill={c[5]}/>
                    <circle cx="197.986" cy="274.85" r="7" fill={c[5]}/>
                    <circle cx="197.986" cy="237.15" r="7" fill={c[5]}/>
                    <circle cx="220.145" cy="206.65" r="7" fill={c[5]}/>
            </g>
        </>
    );
}

export default Hibiscus;
