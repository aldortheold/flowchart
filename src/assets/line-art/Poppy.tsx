import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    18.61249195572,
    18.61249195572,
    493.387298475713,
    493.387298475713,
]);

function Poppy({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-poppy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 70 C -59.64 62 -124.96 -57.75 -136.32 -106.26 C -159.04 -133.98 -127.8 -164.01 -99.4 -173.25 C -103.66 -210.21 -53.96 -235.62 -19.88 -214.83 C -7.1 -240.24 7.1 -240.24 19.88 -214.83 C 53.96 -235.62 103.66 -210.21 99.4 -173.25 C 127.8 -164.01 159.04 -133.98 136.32 -106.26 C 124.96 -57.75 59.64 62 0 70 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -46 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -46 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -46 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -46 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(270) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="71" fill="none" stroke={c[0]} strokeWidth="7"/>
                    <path d="M 256 201 L 265.235 230.628 L 291.353 213.868 L 279.383 242.5 L 310.164 246.449 L 282.59 260.689 L 303.631 283.5 L 273.355 276.683 L 274.811 307.683 L 256 283 L 237.189 307.683 L 238.645 276.683 L 208.369 283.5 L 229.41 260.689 L 201.836 246.449 L 232.617 242.5 L 220.647 213.868 L 246.765 230.628 Z" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round"/>
                    <circle cx="256" cy="207" r="4.5" fill={c[0]}/>
                    <circle cx="277.26" cy="211.853" r="4.5" fill={c[0]}/>
                    <circle cx="294.31" cy="225.449" r="4.5" fill={c[0]}/>
                    <circle cx="303.771" cy="245.096" r="4.5" fill={c[0]}/>
                    <circle cx="303.771" cy="266.904" r="4.5" fill={c[0]}/>
                    <circle cx="294.31" cy="286.551" r="4.5" fill={c[0]}/>
                    <circle cx="277.26" cy="300.147" r="4.5" fill={c[0]}/>
                    <circle cx="256" cy="305" r="4.5" fill={c[0]}/>
                    <circle cx="234.74" cy="300.147" r="4.5" fill={c[0]}/>
                    <circle cx="217.69" cy="286.551" r="4.5" fill={c[0]}/>
                    <circle cx="208.229" cy="266.904" r="4.5" fill={c[0]}/>
                    <circle cx="208.229" cy="245.096" r="4.5" fill={c[0]}/>
                    <circle cx="217.69" cy="225.449" r="4.5" fill={c[0]}/>
                    <circle cx="234.74" cy="211.853" r="4.5" fill={c[0]}/>
            </g>
        </>
    );
}

export default Poppy;
