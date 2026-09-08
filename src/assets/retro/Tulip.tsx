import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    46.556687586467,
    15.000095082001,
    465.443577490393,
    496.999942574237,
]);

function Tulip({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-tulip", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 72 C -44.16 56 -92 -75.52 -80.96 -139.24 C -66.24 -184.08 -18.4 -226.56 0 -236 C 18.4 -226.56 66.24 -184.08 80.96 -139.24 C 92 -75.52 44.16 56 0 72 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <polygon points="256,193 310.56,224.5 310.56,287.5 256,319 201.44,287.5 201.44,224.5" fill={c[4]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round"/>
                    <polygon points="264.023,226.056 285.944,247.977 277.92,277.92 247.977,285.944 226.056,264.023 234.08,234.08" fill={c[5]}/>
            </g>
        </>
    );
}

export default Tulip;
