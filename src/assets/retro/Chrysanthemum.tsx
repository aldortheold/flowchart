import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    14.859296435078,
    11.500096940408,
    497.140183605841,
    500.499987106448,
]);

function Chrysanthemum({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("retro-chrysanthemum", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 76 C -7.25 64 -29.58 -81.94 -28.42 -149.42 C -23.49 -202.44 -5.8 -238.59 1.74 -241 C 7.54 -224.13 19.72 -178.34 17.98 -125.32 C 20.88 -57.84 7.25 64 0 76 Z"/>
                <path id={innerPetalId} d="M 0 56 C -6.25 44 -19.5 -53.04 -16.5 -96.72 C -13.75 -131.04 -5 -154.44 -1.5 -156 C 9.5 -145.08 21 -115.44 21.5 -81.12 C 18 -37.44 6.25 44 0 56 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(20 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(40 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(80 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(100 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(140 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(160 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(200 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(220 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(260 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(280 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(320 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(340 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(10 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(35.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(61.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(87.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(112.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(138.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(164.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(190 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(215.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(241.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(267.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(292.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(318.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="7" strokeLinejoin="round" transform="rotate(344.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="49" fill={c[1]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="23" fill={c[0]}/>
            </g>
        </>
    );
}

export default Chrysanthemum;
