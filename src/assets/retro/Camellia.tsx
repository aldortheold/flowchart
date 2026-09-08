import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    23.000009101566,
    23.000009101566,
    489.000198414143,
    489.000198414143,
]);

function Camellia({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("retro-camellia", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 74 C -36.36 64 -98.98 -59.28 -101 -123.12 C -103.02 -182.4 -48.48 -228 0 -228 C 48.48 -228 103.02 -182.4 101 -123.12 C 98.98 -59.28 36.36 64 0 74 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <path d="M 301.327 143.811 C 309.735 147.115 307.965 185.197 316.766 194.164 C 325.567 203.132 362.385 201.075 365.725 209.424 C 369.066 217.774 340.674 242.616 341.21 255.256 C 341.746 267.897 373.191 293.853 369.647 301.916 C 366.104 309.98 324.332 305.258 315.284 314.258 C 306.236 323.259 311.443 363.921 303.444 367.771 C 295.445 371.621 269.334 342.618 256.754 342.429 C 244.175 342.239 219.706 369.852 211.401 366.387 C 203.095 362.923 205.268 325.632 195.981 317.076 C 186.694 308.519 146.588 312.025 143.445 303.777 C 140.303 295.529 173.041 269.491 172.986 256.724 C 172.931 243.958 140.09 218.709 143.042 210.362 C 145.994 202.015 185.504 204.383 194.587 195.649 C 203.67 186.916 201.212 149.967 209.503 146.459 C 217.793 142.952 242.7 170.347 255.249 169.985 C 267.799 169.623 292.92 140.506 301.327 143.811 Z" fill={c[4]} stroke={c[1]} strokeWidth="10" strokeLinejoin="round"/>
                    <circle cx="256" cy="256" r="50" fill={c[5]} stroke={c[1]} strokeWidth="10"/>
                    <circle cx="238" cy="237" r="25" fill={c[6]}/>
                    <circle cx="256" cy="217" r="6" fill={c[0]}/>
                    <circle cx="278.924" cy="224.448" r="6" fill={c[0]}/>
                    <circle cx="293.091" cy="243.948" r="6" fill={c[0]}/>
                    <circle cx="293.091" cy="268.052" r="6" fill={c[0]}/>
                    <circle cx="278.924" cy="287.552" r="6" fill={c[0]}/>
                    <circle cx="256" cy="295" r="6" fill={c[0]}/>
                    <circle cx="233.076" cy="287.552" r="6" fill={c[0]}/>
                    <circle cx="218.909" cy="268.052" r="6" fill={c[0]}/>
                    <circle cx="218.909" cy="243.948" r="6" fill={c[0]}/>
                    <circle cx="233.076" cy="224.448" r="6" fill={c[0]}/>
            </g>
        </>
    );
}

export default Camellia;
