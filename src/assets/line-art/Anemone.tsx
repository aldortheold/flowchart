import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    21.749990392094,
    21.749990392094,
    490.249784508395,
    490.249784508395,
]);

function Anemone({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-anemone", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 72 C -38.52 62 -104.86 -60.06 -107 -124.74 C -109.14 -184.8 -51.36 -231 0 -231 C 51.36 -231 109.14 -184.8 107 -124.74 C 104.86 -60.06 38.52 62 0 72 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -70 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(315) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="96" fill="none" stroke={c[0]} strokeWidth="7"/>
                    <circle cx="256" cy="181" r="5" fill={c[0]}/>
                    <circle cx="279.176" cy="184.671" r="5" fill={c[0]}/>
                    <circle cx="300.084" cy="195.324" r="5" fill={c[0]}/>
                    <circle cx="316.676" cy="211.916" r="5" fill={c[0]}/>
                    <circle cx="327.329" cy="232.824" r="5" fill={c[0]}/>
                    <circle cx="331" cy="256" r="5" fill={c[0]}/>
                    <circle cx="327.329" cy="279.176" r="5" fill={c[0]}/>
                    <circle cx="316.676" cy="300.084" r="5" fill={c[0]}/>
                    <circle cx="300.084" cy="316.676" r="5" fill={c[0]}/>
                    <circle cx="279.176" cy="327.329" r="5" fill={c[0]}/>
                    <circle cx="256" cy="331" r="5" fill={c[0]}/>
                    <circle cx="232.824" cy="327.329" r="5" fill={c[0]}/>
                    <circle cx="211.916" cy="316.676" r="5" fill={c[0]}/>
                    <circle cx="195.324" cy="300.084" r="5" fill={c[0]}/>
                    <circle cx="184.671" cy="279.176" r="5" fill={c[0]}/>
                    <circle cx="181" cy="256" r="5" fill={c[0]}/>
                    <circle cx="184.671" cy="232.824" r="5" fill={c[0]}/>
                    <circle cx="195.324" cy="211.916" r="5" fill={c[0]}/>
                    <circle cx="211.916" cy="195.324" r="5" fill={c[0]}/>
                    <circle cx="232.824" cy="184.671" r="5" fill={c[0]}/>
                    <circle cx="262.819" cy="207.477" r="4" fill={c[1]}/>
                    <circle cx="286.167" cy="217.387" r="4" fill={c[1]}/>
                    <circle cx="301.432" cy="237.644" r="4" fill={c[1]}/>
                    <circle cx="304.523" cy="262.819" r="4" fill={c[1]}/>
                    <circle cx="294.613" cy="286.167" r="4" fill={c[1]}/>
                    <circle cx="274.356" cy="301.432" r="4" fill={c[1]}/>
                    <circle cx="249.181" cy="304.523" r="4" fill={c[1]}/>
                    <circle cx="225.833" cy="294.613" r="4" fill={c[1]}/>
                    <circle cx="210.568" cy="274.356" r="4" fill={c[1]}/>
                    <circle cx="207.477" cy="249.181" r="4" fill={c[1]}/>
                    <circle cx="217.387" cy="225.833" r="4" fill={c[1]}/>
                    <circle cx="237.644" cy="210.568" r="4" fill={c[1]}/>
            </g>
        </>
    );
}

export default Anemone;
