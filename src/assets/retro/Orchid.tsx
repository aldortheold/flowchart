import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    29.097397003115,
    34.000097976739,
    482.902356594974,
    455.54707658817,
]);

function Orchid({ colors }: FlowerProps) {
    const sepalId = useId();
    const broadPetalId = useId();
    const lipId = useId();
    const c = resolveColors("retro-orchid", colors);

    return (
        <>
            <defs>
                <path id={sepalId} d="M 0 48 C -36 32 -75 -69.44 -66 -128.03 C -54 -169.26 -15 -208.32 0 -217 C 15 -208.32 54 -169.26 66 -128.03 C 75 -69.44 36 32 0 48 Z"/>
                <path id={broadPetalId} d="M 0 44 C -39.96 34 -108.78 -59.54 -111 -123.66 C -113.22 -183.2 -53.28 -229 0 -229 C 53.28 -229 113.22 -183.2 111 -123.66 C 108.78 -59.54 39.96 34 0 44 Z"/>
                <path id={lipId} d="M 0 41 C -31.2 29 -54.08 -25.2 -43.68 -63 C -81.12 -79.8 -101.92 -121.8 -70.72 -147 C -54.08 -193.2 -18.72 -210 0 -176.4 C 18.72 -210 54.08 -193.2 70.72 -147 C 101.92 -121.8 81.12 -79.8 43.68 -63 C 54.08 -25.2 31.2 29 0 41 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g stroke={c[1]} strokeWidth="11" strokeLinejoin="round">
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[4]} transform="rotate(70 256 256)"/>
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[0]} transform="rotate(290 256 256)"/>
                      <use href={`#${lipId}`} x="256" y="256" fill={c[5]} transform="rotate(180 256 256)"/>
                    </g>
                    <ellipse cx="256" cy="270" rx="37" ry="29" fill={c[6]} stroke={c[1]} strokeWidth="9"/>
                    <circle cx="244" cy="260" r="10" fill={c[4]}/>
            </g>
        </>
    );
}

export default Orchid;
