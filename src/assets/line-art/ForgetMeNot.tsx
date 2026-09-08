import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    32.266999993882,
    37.028196655856,
    479.73300524986,
    470.146155316777,
]);

function ForgetMeNot({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-forget-me-not", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 67 C -56.64 57 -118 -66.99 -118 -129.36 C -118 -189.42 -61.36 -226.38 -21.24 -212.52 C -9.44 -194.04 -7.08 -189.42 0 -175.56 C 7.08 -189.42 9.44 -194.04 21.24 -212.52 C 61.36 -226.38 118 -189.42 118 -129.36 C 118 -66.99 56.64 57 0 67 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="7" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -58 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -58 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(72) scale(1)"/>
                      <path d="M 0 -58 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(144) scale(1)"/>
                      <path d="M 0 -58 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(216) scale(1)"/>
                      <path d="M 0 -58 C 0 -84.42 0 -156.78 0 -201" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(288) scale(1)"/>
                    </g>
                    <path d="M 256 177 L 280.687 222.021 L 331.133 231.588 L 295.944 268.979 L 302.435 319.912 L 256 298 L 209.565 319.912 L 216.056 268.979 L 180.867 231.588 L 231.313 222.021 Z" fill="none" stroke={c[1]} strokeWidth="5" strokeLinejoin="round"/>
                    <circle cx="256" cy="256" r="52" fill="none" stroke={c[0]} strokeWidth="7"/>
                    <circle cx="256" cy="256" r="28" fill="none" stroke={c[1]} strokeWidth="4"/>
            </g>
        </>
    );
}

export default ForgetMeNot;
