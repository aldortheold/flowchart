import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    23.399997455938,
    23.399997455938,
    488.599951662817,
    488.599951662817,
]);

function Poppy({ colors }: FlowerProps) {
    const petalId = useId();
    const innerBlotchId = useId();
    const c = resolveColors("botanical-poppy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 70 C -59.64 62 -124.96 -57 -136.32 -104.88 C -159.04 -132.24 -127.8 -161.88 -99.4 -171 C -103.66 -207.48 -53.96 -232.56 -19.88 -212.04 C -7.1 -237.12 7.1 -237.12 19.88 -212.04 C 53.96 -232.56 103.66 -207.48 99.4 -171 C 127.8 -161.88 159.04 -132.24 136.32 -104.88 C 124.96 -57 59.64 62 0 70 Z"/>
                <path id={innerBlotchId} d="M 0 32 C -22.32 22 -60.76 -32.76 -62 -68.04 C -63.24 -100.8 -29.76 -126 0 -126 C 29.76 -126 63.24 -100.8 62 -68.04 C 60.76 -32.76 22.32 22 0 32 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -48 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[5]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -48 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[5]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -48 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[5]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -48 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[5]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(270) scale(1)"/>
                    </g>
                    <g>
                      <use href={`#${innerBlotchId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" opacity="0.9" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerBlotchId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" opacity="0.9" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerBlotchId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" opacity="0.9" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerBlotchId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="2.5" strokeLinejoin="round" opacity="0.9" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="63" fill={c[7]} stroke={c[8]} strokeWidth="4"/>
                    <path d="M 256 202 L 264.208 233.447 L 290.711 214.634 L 276.785 244 L 309.18 246.623 L 279.635 260.168 L 302.765 283 L 271.427 274.385 L 274.469 306.743 L 256 280 L 237.531 306.743 L 240.573 274.385 L 209.235 283 L 232.365 260.168 L 202.82 246.623 L 235.215 244 L 221.289 214.634 L 247.792 233.447 Z" fill={c[9]}/>
                    <circle cx="256" cy="208" r="4.8" fill={c[10]}/>
                    <circle cx="275.523" cy="212.15" r="4.8" fill={c[11]}/>
                    <circle cx="291.671" cy="223.882" r="4.8" fill={c[10]}/>
                    <circle cx="301.651" cy="241.167" r="4.8" fill={c[11]}/>
                    <circle cx="303.737" cy="261.017" r="4.8" fill={c[10]}/>
                    <circle cx="297.569" cy="280" r="4.8" fill={c[11]}/>
                    <circle cx="284.214" cy="294.833" r="4.8" fill={c[10]}/>
                    <circle cx="265.98" cy="302.951" r="4.8" fill={c[11]}/>
                    <circle cx="246.02" cy="302.951" r="4.8" fill={c[10]}/>
                    <circle cx="227.786" cy="294.833" r="4.8" fill={c[11]}/>
                    <circle cx="214.431" cy="280" r="4.8" fill={c[10]}/>
                    <circle cx="208.263" cy="261.017" r="4.8" fill={c[11]}/>
                    <circle cx="210.349" cy="241.167" r="4.8" fill={c[10]}/>
                    <circle cx="220.329" cy="223.882" r="4.8" fill={c[11]}/>
                    <circle cx="236.477" cy="212.15" r="4.8" fill={c[10]}/>
                    <circle cx="256" cy="256" r="15" fill={c[12]}/>
            </g>
        </>
    );
}

export default Poppy;
