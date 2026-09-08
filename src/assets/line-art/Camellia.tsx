import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    29.7499920459,
    29.7499920459,
    482.249877153352,
    482.249877153352,
]);

function Camellia({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("line-art-camellia", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 72 C -34.56 62 -94.08 -57.98 -96 -120.42 C -97.92 -178.4 -46.08 -223 0 -223 C 46.08 -223 97.92 -178.4 96 -120.42 C 94.08 -57.98 34.56 62 0 72 Z"/>
                <path id={middlePetalId} d="M 0 60 C -18 48 -73.44 -54.06 -70.56 -98.58 C -58.32 -133.56 -14.4 -157.41 4.32 -159 C 18.72 -147.87 48.96 -117.66 44.64 -82.68 C 51.84 -38.16 18 48 0 60 Z"/>
                <path id={innerPetalId} d="M 0 43 C -16.56 33 -45.08 -26.52 -46 -55.08 C -46.92 -81.6 -22.08 -102 0 -102 C 22.08 -102 46.92 -81.6 46 -55.08 C 45.08 -26.52 16.56 33 0 43 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="5.5" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(4 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(55.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(106.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(158.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(209.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(261.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(312.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="47" fill="none" stroke={c[0]} strokeWidth="5"/>
                    <circle cx="256" cy="219" r="4.5" fill={c[0]}/>
                    <circle cx="272.054" cy="222.664" r="4.5" fill={c[0]}/>
                    <circle cx="284.928" cy="232.931" r="4.5" fill={c[0]}/>
                    <circle cx="292.072" cy="247.767" r="4.5" fill={c[0]}/>
                    <circle cx="292.072" cy="264.233" r="4.5" fill={c[0]}/>
                    <circle cx="284.928" cy="279.069" r="4.5" fill={c[0]}/>
                    <circle cx="272.054" cy="289.336" r="4.5" fill={c[0]}/>
                    <circle cx="256" cy="293" r="4.5" fill={c[0]}/>
                    <circle cx="239.946" cy="289.336" r="4.5" fill={c[0]}/>
                    <circle cx="227.072" cy="279.069" r="4.5" fill={c[0]}/>
                    <circle cx="219.928" cy="264.233" r="4.5" fill={c[0]}/>
                    <circle cx="219.928" cy="247.767" r="4.5" fill={c[0]}/>
                    <circle cx="227.072" cy="232.931" r="4.5" fill={c[0]}/>
                    <circle cx="239.946" cy="222.664" r="4.5" fill={c[0]}/>
            </g>
        </>
    );
}

export default Camellia;
