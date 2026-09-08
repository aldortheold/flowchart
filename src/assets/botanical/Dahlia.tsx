import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    19.750098283681,
    19.750098283681,
    492.25004752685,
    492.25004752685,
]);

function Dahlia({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-dahlia", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 72 C -20.64 56 -43 -75.2 -37.84 -138.65 C -30.96 -183.3 -8.6 -225.6 0 -235 C 8.6 -225.6 30.96 -183.3 37.84 -138.65 C 43 -75.2 20.64 56 0 72 Z"/>
                <path id={middlePetalId} d="M 0 62 C -18.72 46 -39 -56.96 -34.32 -105.02 C -28.08 -138.84 -7.8 -170.88 0 -178 C 7.8 -170.88 28.08 -138.84 34.32 -105.02 C 39 -56.96 18.72 46 0 62 Z"/>
                <path id={innerPetalId} d="M 0 48 C -15.36 32 -32 -38.08 -28.16 -70.21 C -23.04 -92.82 -6.4 -114.24 0 -119 C 6.4 -114.24 23.04 -92.82 28.16 -70.21 C 32 -38.08 15.36 32 0 48 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(11.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(33.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(56.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(78.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(101.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(123.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(146.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(168.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(191.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(213.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(236.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(258.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(281.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(303.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(326.25 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(348.75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(7.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(37.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(97.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(127.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(187.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(217.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(277.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(307.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[6]} strokeWidth="2" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(22.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(67.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(112.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(157.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(202.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(247.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(292.5) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(315) scale(1)"/>
                      <path d="M 0 -72 C 0 -88.2 0 -163.8 0 -210" fill="none" stroke={c[7]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(337.5) scale(1)"/>
                    </g>
                    <path d="M 256 197 L 264.541 224.124 L 285.5 204.905 L 279.335 232.665 L 307.095 226.5 L 287.876 247.459 L 315 256 L 287.876 264.541 L 307.095 285.5 L 279.335 279.335 L 285.5 307.095 L 264.541 287.876 L 256 315 L 247.459 287.876 L 226.5 307.095 L 232.665 279.335 L 204.905 285.5 L 224.124 264.541 L 197 256 L 224.124 247.459 L 204.905 226.5 L 232.665 232.665 L 226.5 204.905 L 247.459 224.124 Z" fill={c[1]} stroke={c[6]} strokeWidth="2"/>
                    <circle cx="256" cy="256" r="20" fill={c[0]}/>
            </g>
        </>
    );
}

export default Dahlia;
