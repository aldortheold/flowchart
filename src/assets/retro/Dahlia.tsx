import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    10.00020371883,
    10.00020371883,
    502.000395906405,
    502.000395906405,
]);

function Dahlia({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("retro-dahlia", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 74 C -24 58 -50 -77.12 -44 -142.19 C -36 -187.98 -10 -231.36 0 -241 C 10 -231.36 36 -187.98 44 -142.19 C 50 -77.12 24 58 0 74 Z"/>
                <path id={innerPetalId} d="M 0 56 C -20.16 40 -42 -48.96 -36.96 -90.27 C -30.24 -119.34 -8.4 -146.88 0 -153 C 8.4 -146.88 30.24 -119.34 36.96 -90.27 C 42 -48.96 20.16 40 0 56 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(30 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(150 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(210 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(330 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(18 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(54 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(126 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(162 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(198 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(234 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(306 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="8" strokeLinejoin="round" transform="rotate(342 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <polygon points="256,208 284.214,217.167 301.651,241.167 301.651,270.833 284.214,294.833 256,304 227.786,294.833 210.349,270.833 210.349,241.167 227.786,217.167" fill={c[6]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round"/>
                    <polygon points="261.694,234.75 273.097,242.155 277.97,254.849 274.451,267.982 263.884,276.539 250.306,277.25 238.903,269.845 234.03,257.151 237.549,244.018 248.116,235.461" fill={c[7]}/>
            </g>
        </>
    );
}

export default Dahlia;
