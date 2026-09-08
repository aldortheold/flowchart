import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    52.91211285349,
    22.000001828125,
    459.088210818088,
    490.000042046879,
]);

function Tulip({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("line-art-tulip", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 69 C -42.24 53 -88 -73.92 -77.44 -136.29 C -63.36 -180.18 -17.6 -221.76 0 -231 C 17.6 -221.76 63.36 -180.18 77.44 -136.29 C 88 -73.92 42.24 53 0 69 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="6" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(60) scale(1)"/>
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(120) scale(1)"/>
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(240) scale(1)"/>
                      <path d="M 0 -58 C 0 -85.68 0 -159.12 0 -204" fill="none" stroke={c[1]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="rotate(300) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="61" fill="none" stroke={c[0]} strokeWidth="6"/>
                    <circle cx="256" cy="220" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="287.177" cy="238" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="287.177" cy="274" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="256" cy="292" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="224.823" cy="274" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
                    <circle cx="224.823" cy="238" r="8" fill="none" stroke={c[0]} strokeWidth="4"/>
            </g>
        </>
    );
}

export default Tulip;
