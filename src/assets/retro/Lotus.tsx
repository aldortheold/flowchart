import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    15.000095082001,
    15.000095082001,
    496.999942574237,
    496.999942574237,
]);

function Lotus({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("retro-lotus", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 76 C -44.16 60 -92 -75.52 -80.96 -139.24 C -66.24 -184.08 -18.4 -226.56 0 -236 C 18.4 -226.56 66.24 -184.08 80.96 -139.24 C 92 -75.52 44.16 60 0 76 Z"/>
                <path id={innerPetalId} d="M 0 59 C -31.2 43 -65 -51.52 -57.2 -94.99 C -46.8 -125.58 -13 -154.56 0 -161 C 13 -154.56 46.8 -125.58 57.2 -94.99 C 65 -51.52 31.2 43 0 59 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <polygon points="256,208 289.941,222.059 304,256 289.941,289.941 256,304 222.059,289.941 208,256 222.059,222.059" fill={c[6]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round"/>
                    <polygon points="262.212,232.818 276.785,244 279.182,262.212 268,276.785 249.788,279.182 235.215,268 232.818,249.788 244,235.215" fill={c[7]}/>
            </g>
        </>
    );
}

export default Lotus;
