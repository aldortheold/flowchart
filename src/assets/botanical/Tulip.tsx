import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

// Includes the outer petals' four-unit stroke.
const NEW_VIEWBOX = scaleFlower([
    77.330817628,
    50,
    434.669182372,
    462,
]);

function Tulip({ colors }: FlowerProps) {

    const outerPetalId = useId();
    const innerPetalId = useId();
    const petalRibId = useId();
    const c = resolveColors("botanical-tulip", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M256 268 C211 221 211 126 256 52 C301 126 301 221 256 268 Z"/>
                <path id={innerPetalId} d="M256 276 C227 238 230 166 256 111 C284 166 283 238 256 276 Z"/>
                <path id={petalRibId} d="M256 244 C248 188 251 116 256 70"/>
            </defs>
            <g transform={NEW_VIEWBOX}>
                <g stroke={c[2]} strokeWidth="2" strokeLinejoin="round" strokeOpacity="0.28">
                    <use href={`#${outerPetalId}`} fill={c[0]} transform="rotate(0 256 256)"/>
                    <use href={`#${outerPetalId}`} fill={c[1]} transform="rotate(60 256 256)"/>
                    <use href={`#${outerPetalId}`} fill={c[0]} transform="rotate(120 256 256)"/>
                    <use href={`#${outerPetalId}`} fill={c[2]} transform="rotate(180 256 256)"/>
                    <use href={`#${outerPetalId}`} fill={c[0]} transform="rotate(240 256 256)"/>
                    <use href={`#${outerPetalId}`} fill={c[1]} transform="rotate(300 256 256)"/>
                </g>
                <g fill="none" stroke={c[7]} strokeWidth="5" strokeLinecap="round" opacity="0.62">
                    <use href={`#${petalRibId}`} transform="rotate(0 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(60 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(120 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(180 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(240 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(300 256 256)"/>
                </g>
                <g stroke={c[2]} strokeWidth="1.5" strokeLinejoin="round" strokeOpacity="0.24">
                    <use href={`#${innerPetalId}`} fill={c[3]} transform="rotate(30 256 256)"/>
                    <use href={`#${innerPetalId}`} fill={c[4]} transform="rotate(90 256 256)"/>
                    <use href={`#${innerPetalId}`} fill={c[3]} transform="rotate(150 256 256)"/>
                    <use href={`#${innerPetalId}`} fill={c[4]} transform="rotate(210 256 256)"/>
                    <use href={`#${innerPetalId}`} fill={c[3]} transform="rotate(270 256 256)"/>
                    <use href={`#${innerPetalId}`} fill={c[4]} transform="rotate(330 256 256)"/>
                </g>
                <circle cx="256" cy="256" r="56" fill={c[5]}/>
                <circle cx="256" cy="256" r="32" fill={c[2]}/>
                <g fill={c[6]}>
                    <ellipse cx="256" cy="219" rx="8" ry="15"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(60 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(120 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(180 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(240 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(300 256 256)"/>
                </g>
                <circle cx="256" cy="256" r="13" fill={c[6]}/>
            </g>
        </>
    );
}

export default Tulip;
