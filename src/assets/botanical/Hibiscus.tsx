import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    30.961503468318,
    22.437508668636,
    481.038552791313,
    466.271681125952,
]);

function Hibiscus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("botanical-hibiscus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 68 C -48.72 60 -102.08 -57.25 -111.36 -105.34 C -129.92 -132.82 -104.4 -162.59 -81.2 -171.75 C -84.68 -208.39 -44.08 -233.58 -16.24 -212.97 C -5.8 -238.16 5.8 -238.16 16.24 -212.97 C 44.08 -233.58 84.68 -208.39 81.2 -171.75 C 104.4 -162.59 129.92 -132.82 111.36 -105.34 C 102.08 -57.25 48.72 60 0 68 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="3.4" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -38 C -8 -85.26 -8 -158.34 0 -203" fill="none" stroke={c[6]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -38 C -8 -85.26 -8 -158.34 0 -203" fill="none" stroke={c[6]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="rotate(72) scale(1)"/>
                      <path d="M 0 -38 C -8 -85.26 -8 -158.34 0 -203" fill="none" stroke={c[6]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="rotate(144) scale(1)"/>
                      <path d="M 0 -38 C -8 -85.26 -8 -158.34 0 -203" fill="none" stroke={c[6]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="rotate(216) scale(1)"/>
                      <path d="M 0 -38 C -8 -85.26 -8 -158.34 0 -203" fill="none" stroke={c[6]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="rotate(288) scale(1)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -42 C 20 -64.68 20 -120.12 0 -154" fill="none" stroke={c[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" transform="rotate(2.8) scale(1)"/>
                      <path d="M 0 -42 C 20 -64.68 20 -120.12 0 -154" fill="none" stroke={c[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" transform="rotate(74.8) scale(1)"/>
                      <path d="M 0 -42 C 20 -64.68 20 -120.12 0 -154" fill="none" stroke={c[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" transform="rotate(146.8) scale(1)"/>
                      <path d="M 0 -42 C 20 -64.68 20 -120.12 0 -154" fill="none" stroke={c[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" transform="rotate(218.8) scale(1)"/>
                      <path d="M 0 -42 C 20 -64.68 20 -120.12 0 -154" fill="none" stroke={c[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" transform="rotate(290.8) scale(1)"/>
                    </g>
                    <path d="M 256 168 L 278.336 225.257 L 339.693 228.807 L 292.14 267.743 L 307.725 327.193 L 256 294 L 204.275 327.193 L 219.86 267.743 L 172.307 228.807 L 233.664 225.257 Z" fill={c[1]} opacity="0.72"/>
                    <circle cx="256" cy="256" r="40" fill={c[7]}/>
                    <circle cx="256" cy="201" r="7.5" fill={c[8]}/>
                    <circle cx="288.328" cy="211.504" r="6" fill={c[9]}/>
                    <circle cx="308.308" cy="239.004" r="7.5" fill={c[8]}/>
                    <circle cx="308.308" cy="272.996" r="6" fill={c[9]}/>
                    <circle cx="288.328" cy="300.496" r="7.5" fill={c[8]}/>
                    <circle cx="256" cy="311" r="6" fill={c[9]}/>
                    <circle cx="223.672" cy="300.496" r="7.5" fill={c[8]}/>
                    <circle cx="203.692" cy="272.996" r="6" fill={c[9]}/>
                    <circle cx="203.692" cy="239.004" r="7.5" fill={c[8]}/>
                    <circle cx="223.672" cy="211.504" r="6" fill={c[9]}/>
                    <circle cx="256" cy="256" r="15" fill={c[8]}/>
            </g>
        </>
    );
}

export default Hibiscus;
