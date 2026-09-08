import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    22.112506315421,
    22.112506315421,
    489.887641691555,
    489.887641691555,
]);

function Poppy({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("minimal-poppy", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 70 C -59.64 62 -124.96 -57.75 -136.32 -106.26 C -159.04 -133.98 -127.8 -164.01 -99.4 -173.25 C -103.66 -210.21 -53.96 -235.62 -19.88 -214.83 C -7.1 -240.24 7.1 -240.24 19.88 -214.83 C 53.96 -235.62 103.66 -210.21 99.4 -173.25 C 127.8 -164.01 159.04 -133.98 136.32 -106.26 C 124.96 -57.75 59.64 62 0 70 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[1]} transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="71" fill={c[4]}/>
                    <path d="M 256 204 L 265.567 232.903 L 292.77 219.23 L 279.097 246.433 L 308 256 L 279.097 265.567 L 292.77 292.77 L 265.567 279.097 L 256 308 L 246.433 279.097 L 219.23 292.77 L 232.903 265.567 L 204 256 L 232.903 246.433 L 219.23 219.23 L 246.433 232.903 Z" fill={c[5]}/>
            </g>
        </>
    );
}

export default Poppy;
