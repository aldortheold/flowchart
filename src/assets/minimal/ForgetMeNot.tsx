import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    35.86658967729,
    40.570513284497,
    476.133467075863,
    466.539655480817,
]);

function ForgetMeNot({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("minimal-forget-me-not", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 67 C -56.64 57 -118 -66.99 -118 -129.36 C -118 -189.42 -61.36 -226.38 -21.24 -212.52 C -9.44 -194.04 -7.08 -189.42 0 -175.56 C 7.08 -189.42 9.44 -194.04 21.24 -212.52 C 61.36 -226.38 118 -189.42 118 -129.36 C 118 -66.99 56.64 57 0 67 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[1]} transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="58" fill={c[5]}/>
                    <circle cx="256" cy="256" r="34" fill={c[6]}/>
            </g>
        </>
    );
}

export default ForgetMeNot;
