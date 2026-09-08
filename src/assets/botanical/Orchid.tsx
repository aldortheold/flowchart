import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    37.876010953918,
    39.399995696443,
    474.124140710471,
    447.440952807513,
]);

function Orchid({ colors }: FlowerProps) {
    const sepalId = useId();
    const broadPetalId = useId();
    const lipId = useId();
    const c = resolveColors("botanical-orchid", colors);

    return (
        <>
            <defs>
                <path id={sepalId} d="M 0 48 C -34.56 32 -72 -68.8 -63.36 -126.85 C -51.84 -167.7 -14.4 -206.4 0 -215 C 14.4 -206.4 51.84 -167.7 63.36 -126.85 C 72 -68.8 34.56 32 0 48 Z"/>
                <path id={broadPetalId} d="M 0 44 C -38.52 34 -104.86 -58.24 -107 -120.96 C -109.14 -179.2 -51.36 -224 0 -224 C 51.36 -224 109.14 -179.2 107 -120.96 C 104.86 -58.24 38.52 34 0 44 Z"/>
                <path id={lipId} d="M 0 42 C -30 30 -52 -24.6 -42 -61.5 C -78 -77.9 -98 -118.9 -68 -143.5 C -52 -188.6 -18 -205 0 -172.2 C 18 -205 52 -188.6 68 -143.5 C 98 -118.9 78 -77.9 42 -61.5 C 52 -24.6 30 30 0 42 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(70 256 256)"/>
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(290 256 256)"/>
                    </g>
                    <g transform="translate(256 256)" fill="none" stroke={c[6]} strokeWidth="3.5" strokeLinecap="round" opacity="0.72">
                      <path d="M 0 -35 C -8 -92 -5 -154 0 -194"/>
                      <path d="M 0 -35 C -8 -92 -5 -154 0 -194" transform="rotate(120)"/>
                      <path d="M 0 -35 C -8 -92 -5 -154 0 -194" transform="rotate(240)"/>
                      <path d="M 0 -32 C 10 -96 12 -164 0 -202" transform="rotate(70)"/>
                      <path d="M 0 -32 C 10 -96 12 -164 0 -202" transform="rotate(290)"/>
                    </g>
                    <use href={`#${lipId}`} x="256" y="256" fill={c[7]} stroke={c[8]} strokeWidth="4" strokeLinejoin="round" transform="rotate(180 256 256)"/>
                    <path d="M 219 281 C 232 253 280 251 294 281 C 286 304 270 317 256 323 C 241 317 226 304 219 281 Z" fill={c[4]} stroke={c[1]} strokeWidth="3"/>
                    <g fill={c[8]} opacity="0.72">
                      <circle cx="233" cy="306" r="5"/><circle cx="245" cy="327" r="4"/><circle cx="260" cy="337" r="5"/><circle cx="278" cy="322" r="4.5"/><circle cx="287" cy="299" r="4"/><circle cx="253" cy="306" r="3.5"/><circle cx="271" cy="298" r="3.5"/>
                    </g>
                    <ellipse cx="256" cy="265" rx="27" ry="20" fill={c[9]} stroke={c[8]} strokeWidth="3"/>
            </g>
        </>
    );
}

export default Orchid;
