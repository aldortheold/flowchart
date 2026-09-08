import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    35.204397970062,
    37.999996782352,
    476.795367434736,
    449.858960828351,
]);

function Orchid({ colors }: FlowerProps) {
    const sepalId = useId();
    const broadPetalId = useId();
    const lipId = useId();
    const c = resolveColors("line-art-orchid", colors);

    return (
        <>
            <defs>
                <path id={sepalId} d="M 0 48 C -34.56 32 -72 -68.8 -63.36 -126.85 C -51.84 -167.7 -14.4 -206.4 0 -215 C 14.4 -206.4 51.84 -167.7 63.36 -126.85 C 72 -68.8 34.56 32 0 48 Z"/>
                <path id={broadPetalId} d="M 0 43 C -38.52 33 -104.86 -58.5 -107 -121.5 C -109.14 -180 -51.36 -225 0 -225 C 51.36 -225 109.14 -180 107 -121.5 C 104.86 -58.5 38.52 33 0 43 Z"/>
                <path id={lipId} d="M 0 41 C -30.3 29 -52.52 -24.72 -42.42 -61.8 C -78.78 -78.28 -98.98 -119.48 -68.68 -144.2 C -52.52 -189.52 -18.18 -206 0 -173.04 C 18.18 -206 52.52 -189.52 68.68 -144.2 C 98.98 -119.48 78.78 -78.28 42.42 -61.8 C 52.52 -24.72 30.3 29 0 41 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${sepalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round">
                      <use href={`#${broadPetalId}`} x="256" y="256" transform="rotate(70 256 256)"/>
                      <use href={`#${broadPetalId}`} x="256" y="256" transform="rotate(290 256 256)"/>
                      <use href={`#${lipId}`} x="256" y="256" transform="rotate(180 256 256)"/>
                    </g>
                    <g fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round">
                      <path d="M 256 226 C 248 163 250 93 256 51"/>
                      <path d="M 276 270 C 328 292 375 335 398 382"/>
                      <path d="M 236 270 C 184 292 137 335 114 382"/>
                      <path d="M 235 278 C 225 314 229 358 256 401"/>
                    </g>
                    <ellipse cx="256" cy="266" rx="31" ry="23" fill="none" stroke={c[0]} strokeWidth="6"/>
            </g>
        </>
    );
}

export default Orchid;
