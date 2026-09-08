import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    15.250095923803,
    15.250095923803,
    496.749968025399,
    496.749968025399,
]);

function Dahlia({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("line-art-dahlia", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 72 C -21.12 56 -44 -76.16 -38.72 -140.42 C -31.68 -185.64 -8.8 -228.48 0 -238 C 8.8 -228.48 31.68 -185.64 38.72 -140.42 C 44 -76.16 21.12 56 0 72 Z"/>
                <path id={middlePetalId} d="M 0 60 C -18.24 44 -38 -56.64 -33.44 -104.43 C -27.36 -138.06 -7.6 -169.92 0 -177 C 7.6 -169.92 27.36 -138.06 33.44 -104.43 C 38 -56.64 18.24 44 0 60 Z"/>
                <path id={innerPetalId} d="M 0 46 C -14.88 30 -31 -36.8 -27.28 -67.85 C -22.32 -89.7 -6.2 -110.4 0 -115 C 6.2 -110.4 22.32 -89.7 27.28 -67.85 C 31 -36.8 14.88 30 0 46 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(11.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(33.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(56.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(78.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(101.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(123.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(146.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(168.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(191.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(213.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(236.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(258.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(281.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(303.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(326.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(348.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(7.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(37.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(97.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(127.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(187.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(217.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(277.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(307.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <path d="M 256 198 L 265.271 227.468 L 290.092 209.077 L 280.271 238.366 L 311.161 238.077 L 286 256 L 311.161 273.923 L 280.271 273.634 L 290.092 302.923 L 265.271 284.532 L 256 314 L 246.729 284.532 L 221.908 302.923 L 231.729 273.634 L 200.839 273.923 L 226 256 L 200.839 238.077 L 231.729 238.366 L 221.908 209.077 L 246.729 227.468 Z" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round"/>
            </g>
        </>
    );
}

export default Dahlia;
