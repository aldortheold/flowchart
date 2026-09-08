import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    24.000006343752,
    24.000006343752,
    488.000122343781,
    488.000122343781,
]);

function Lotus({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("minimal-lotus", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 74 C -42.24 58 -88 -74.24 -77.44 -136.88 C -63.36 -180.96 -17.6 -222.72 0 -232 C 17.6 -222.72 63.36 -180.96 77.44 -136.88 C 88 -74.24 42.24 58 0 74 Z"/>
                <path id={innerPetalId} d="M 0 58 C -29.76 42 -62 -49.92 -54.56 -92.04 C -44.64 -121.68 -12.4 -149.76 0 -156 C 12.4 -149.76 44.64 -121.68 54.56 -92.04 C 62 -49.92 29.76 42 0 58 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[1]} transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[1]} transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="42" fill={c[5]}/>
                    <circle cx="246" cy="243" r="14" fill={c[6]}/>
            </g>
        </>
    );
}

export default Lotus;
