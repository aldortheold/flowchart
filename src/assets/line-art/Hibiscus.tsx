import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    27.263693807676,
    18.612501421057,
    484.736584964868,
    469.825533017425,
]);

function Hibiscus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-hibiscus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 69 C -49.14 61 -102.96 -57.75 -112.32 -106.26 C -131.04 -133.98 -105.3 -164.01 -81.9 -173.25 C -85.41 -210.21 -44.46 -235.62 -16.38 -214.83 C -5.85 -240.24 5.85 -240.24 16.38 -214.83 C 44.46 -235.62 85.41 -210.21 81.9 -173.25 C 105.3 -164.01 131.04 -133.98 112.32 -106.26 C 102.96 -57.75 49.14 61 0 69 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -34 C 0 -85.26 0 -158.34 0 -203" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -34 C 0 -85.26 0 -158.34 0 -203" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(72) scale(1)"/>
                      <path d="M 0 -34 C 0 -85.26 0 -158.34 0 -203" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(144) scale(1)"/>
                      <path d="M 0 -34 C 0 -85.26 0 -158.34 0 -203" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(216) scale(1)"/>
                      <path d="M 0 -34 C 0 -85.26 0 -158.34 0 -203" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(288) scale(1)"/>
                    </g>
                    <path d="M 256 172 L 277.16 226.875 L 335.889 230.043 L 290.238 267.125 L 305.374 323.957 L 256 292 L 206.626 323.957 L 221.762 267.125 L 176.111 230.043 L 234.84 226.875 Z" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round"/>
                    <circle cx="256" cy="200" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="288.916" cy="210.695" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="309.259" cy="238.695" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="309.259" cy="273.305" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="288.916" cy="301.305" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="256" cy="312" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="223.084" cy="301.305" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="202.741" cy="273.305" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="202.741" cy="238.695" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="223.084" cy="210.695" r="6" fill="none" stroke={c[0]} strokeWidth="4"/>
            </g>
        </>
    );
}

export default Hibiscus;
