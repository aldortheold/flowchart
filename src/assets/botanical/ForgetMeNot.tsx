import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    38.952901647183,
    43.512915383442,
    473.046916915084,
    463.552064344747,
]);

function ForgetMeNot({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("botanical-forget-me-not", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 67 C -55.2 57 -115 -65.54 -115 -126.56 C -115 -185.32 -59.8 -221.48 -20.7 -207.92 C -9.2 -189.84 -6.9 -185.32 0 -171.76 C 6.9 -185.32 9.2 -189.84 20.7 -207.92 C 59.8 -221.48 115 -185.32 115 -126.56 C 115 -65.54 55.2 57 0 67 Z"/>
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
                      <path d="M 0 -54 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[6]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -54 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[6]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(72) scale(1)"/>
                      <path d="M 0 -54 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[6]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(144) scale(1)"/>
                      <path d="M 0 -54 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[6]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(216) scale(1)"/>
                      <path d="M 0 -54 C 0 -82.32 0 -152.88 0 -196" fill="none" stroke={c[6]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" transform="rotate(288) scale(1)"/>
                    </g>
                    <path d="M 256 177 L 280.687 222.021 L 331.133 231.588 L 295.944 268.979 L 302.435 319.912 L 256 298 L 209.565 319.912 L 216.056 268.979 L 180.867 231.588 L 231.313 222.021 Z" fill={c[7]}/>
                    <circle cx="256" cy="256" r="51" fill={c[8]} stroke={c[9]} strokeWidth="4"/>
                    <circle cx="256" cy="229" r="8" fill={c[10]}/>
                    <circle cx="281.679" cy="247.657" r="8" fill={c[10]}/>
                    <circle cx="271.87" cy="277.843" r="8" fill={c[10]}/>
                    <circle cx="240.13" cy="277.843" r="8" fill={c[10]}/>
                    <circle cx="230.321" cy="247.657" r="8" fill={c[10]}/>
                    <circle cx="256" cy="256" r="13" fill={c[11]}/>
            </g>
        </>
    );
}

export default ForgetMeNot;
