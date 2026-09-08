import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    25.732201002385,
    30.847894145419,
    486.26822175529,
    476.844810494865,
]);

function ForgetMeNot({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-forget-me-not", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 69 C -58.56 59 -122 -68.44 -122 -132.16 C -122 -193.52 -63.44 -231.28 -21.96 -217.12 C -9.76 -198.24 -7.32 -193.52 0 -179.36 C 7.32 -193.52 9.76 -198.24 21.96 -217.12 C 63.44 -231.28 122 -193.52 122 -132.16 C 122 -68.44 58.56 59 0 69 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="63" fill={c[4]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="31" fill={c[5]}/>
                    <circle cx="256" cy="213" r="7" fill={c[1]}/>
                    <circle cx="296.895" cy="242.712" r="7" fill={c[1]}/>
                    <circle cx="281.275" cy="290.788" r="7" fill={c[1]}/>
                    <circle cx="230.725" cy="290.788" r="7" fill={c[1]}/>
                    <circle cx="215.105" cy="242.712" r="7" fill={c[1]}/>
            </g>
        </>
    );
}

export default ForgetMeNot;
