import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    25.300005587267,
    25.300005587267,
    486.700102553381,
    486.700102553381,
]);

function Lotus({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-lotus", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 76 C -41.28 60 -86 -73.28 -75.68 -135.11 C -61.92 -178.62 -17.2 -219.84 0 -229 C 17.2 -219.84 61.92 -178.62 75.68 -135.11 C 86 -73.28 41.28 60 0 76 Z"/>
                <path id={middlePetalId} d="M 0 68 C -33.6 52 -70 -57.92 -61.6 -106.79 C -50.4 -141.18 -14 -173.76 0 -181 C 14 -173.76 50.4 -141.18 61.6 -106.79 C 70 -57.92 33.6 52 0 68 Z"/>
                <path id={innerPetalId} d="M 0 56 C -23.04 40 -48 -40.32 -42.24 -74.34 C -34.56 -98.28 -9.6 -120.96 0 -126 C 9.6 -120.96 34.56 -98.28 42.24 -74.34 C 48 -40.32 23.04 40 0 56 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -55 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(315) scale(1)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(22.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(67.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(112.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(157.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(202.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(247.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(292.5) scale(1)"/>
                      <path d="M 0 -44 C 0 -66.36 0 -123.24 0 -158" fill="none" stroke={c[8]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(337.5) scale(1)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[9]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[11]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[9]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[11]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[9]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[10]} strokeWidth="2.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="47" fill={c[12]} stroke={c[13]} strokeWidth="4"/>
                    <circle cx="256" cy="231" r="5.5" fill={c[14]}/>
                    <circle cx="275.546" cy="240.413" r="5.5" fill={c[14]}/>
                    <circle cx="280.373" cy="261.563" r="5.5" fill={c[14]}/>
                    <circle cx="266.847" cy="278.524" r="5.5" fill={c[14]}/>
                    <circle cx="245.153" cy="278.524" r="5.5" fill={c[14]}/>
                    <circle cx="231.627" cy="261.563" r="5.5" fill={c[14]}/>
                    <circle cx="236.454" cy="240.413" r="5.5" fill={c[14]}/>
                    <circle cx="256" cy="256" r="5.5" fill={c[14]}/>
            </g>
        </>
    );
}

export default Lotus;
