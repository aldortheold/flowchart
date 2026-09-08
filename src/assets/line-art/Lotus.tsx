import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    22.000001828125,
    22.000001828125,
    490.000042046879,
    490.000042046879,
]);

function Lotus({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const c = resolveColors("line-art-lotus", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 75 C -41.28 59 -86 -73.92 -75.68 -136.29 C -61.92 -180.18 -17.2 -221.76 0 -231 C 17.2 -221.76 61.92 -180.18 75.68 -136.29 C 86 -73.92 41.28 59 0 75 Z"/>
                <path id={middlePetalId} d="M 0 62 C -31.68 46 -66 -55.68 -58.08 -102.66 C -47.52 -135.72 -13.2 -167.04 0 -174 C 13.2 -167.04 47.52 -135.72 58.08 -102.66 C 66 -55.68 31.68 46 0 62 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -57 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(315) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="45" fill="none" stroke={c[0]} strokeWidth="6"/>
                    <circle cx="256" cy="232" r="5" fill={c[0]}/>
                    <circle cx="274.764" cy="241.036" r="5" fill={c[0]}/>
                    <circle cx="279.398" cy="261.341" r="5" fill={c[0]}/>
                    <circle cx="266.413" cy="277.623" r="5" fill={c[0]}/>
                    <circle cx="245.587" cy="277.623" r="5" fill={c[0]}/>
                    <circle cx="232.602" cy="261.341" r="5" fill={c[0]}/>
                    <circle cx="237.236" cy="241.036" r="5" fill={c[0]}/>
            </g>
        </>
    );
}

export default Lotus;
