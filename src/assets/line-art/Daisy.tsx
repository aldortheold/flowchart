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

function Daisy({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-daisy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 76 C -18.72 66 -50.96 -59.54 -52 -123.66 C -53.04 -183.2 -24.96 -229 0 -229 C 24.96 -229 53.04 -183.2 52 -123.66 C 50.96 -59.54 18.72 66 0 76 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -78 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[1]} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.86" transform="rotate(315) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="89" fill="none" stroke={c[0]} strokeWidth="7"/>
                    <circle cx="256" cy="256" r="64" fill="none" stroke={c[1]} strokeWidth="4"/>
                    <circle cx="256" cy="210" r="4" fill={c[0]}/>
                    <circle cx="279" cy="216.163" r="4" fill={c[0]}/>
                    <circle cx="295.837" cy="233" r="4" fill={c[0]}/>
                    <circle cx="302" cy="256" r="4" fill={c[0]}/>
                    <circle cx="295.837" cy="279" r="4" fill={c[0]}/>
                    <circle cx="279" cy="295.837" r="4" fill={c[0]}/>
                    <circle cx="256" cy="302" r="4" fill={c[0]}/>
                    <circle cx="233" cy="295.837" r="4" fill={c[0]}/>
                    <circle cx="216.163" cy="279" r="4" fill={c[0]}/>
                    <circle cx="210" cy="256" r="4" fill={c[0]}/>
                    <circle cx="216.163" cy="233" r="4" fill={c[0]}/>
                    <circle cx="233" cy="216.163" r="4" fill={c[0]}/>
            </g>
        </>
    );
}

export default Daisy;
