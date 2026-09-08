import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    30.663806541963,
    22.112491853102,
    481.335897704477,
    466.449323471138,
]);

function Hibiscus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("minimal-hibiscus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 68 C -49.14 60 -102.96 -57.75 -112.32 -106.26 C -131.04 -133.98 -105.3 -164.01 -81.9 -173.25 C -85.41 -210.21 -44.46 -235.62 -16.38 -214.83 C -5.85 -240.24 5.85 -240.24 16.38 -214.83 C 44.46 -235.62 85.41 -210.21 81.9 -173.25 C 105.3 -164.01 131.04 -133.98 112.32 -106.26 C 102.96 -57.75 49.14 60 0 68 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[1]} transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <path d="M 256 174 L 276.572 227.684 L 333.987 230.661 L 289.287 266.816 L 304.198 322.339 L 256 291 L 207.802 322.339 L 222.713 266.816 L 178.013 230.661 L 235.428 227.684 Z" fill={c[5]}/>
                    <circle cx="256" cy="256" r="29" fill={c[6]}/>
            </g>
        </>
    );
}

export default Hibiscus;
