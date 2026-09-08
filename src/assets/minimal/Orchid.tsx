import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    38.721711985374,
    41.999992875587,
    473.278849883425,
    447.299922739701,
]);

function Orchid({ colors }: FlowerProps) {
    const sepalId = useId();
    const broadPetalId = useId();
    const lipId = useId();
    const c = resolveColors("minimal-orchid", colors);

    return (
        <>
            <defs>
                <path id={sepalId} d="M 0 45 C -33.6 29 -70 -68.48 -61.6 -126.26 C -50.4 -166.92 -14 -205.44 0 -214 C 14 -205.44 50.4 -166.92 61.6 -126.26 C 70 -68.48 33.6 29 0 45 Z"/>
                <path id={broadPetalId} d="M 0 42 C -38.52 32 -104.86 -58.5 -107 -121.5 C -109.14 -180 -51.36 -225 0 -225 C 51.36 -225 109.14 -180 107 -121.5 C 104.86 -58.5 38.52 32 0 42 Z"/>
                <path id={lipId} d="M 0 40 C -30.3 28 -52.52 -24.84 -42.42 -62.1 C -78.78 -78.66 -98.98 -120.06 -68.68 -144.9 C -52.52 -190.44 -18.18 -207 0 -173.88 C 18.18 -207 52.52 -190.44 68.68 -144.9 C 98.98 -120.06 78.78 -78.66 42.42 -62.1 C 52.52 -24.84 30.3 28 0 40 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[1]} transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${sepalId}`} x="256" y="256" fill={c[2]} transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[2]} transform="rotate(70 256 256)"/>
                      <use href={`#${broadPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(290 256 256)"/>
                      <use href={`#${lipId}`} x="256" y="256" fill={c[4]} transform="rotate(180 256 256)"/>
                    </g>
                    <ellipse cx="256" cy="270" rx="31" ry="24" fill={c[5]}/>
            </g>
        </>
    );
}

export default Orchid;
