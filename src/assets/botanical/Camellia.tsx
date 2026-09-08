import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    36.500000428711,
    36.500000428711,
    475.500006430664,
    475.500006430664,
]);

function Camellia({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-camellia", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 74 C -33.12 64 -90.16 -56.68 -92 -117.72 C -93.84 -174.4 -44.16 -218 0 -218 C 44.16 -218 93.84 -174.4 92 -117.72 C 90.16 -56.68 33.12 64 0 74 Z"/>
                <path id={middlePetalId} d="M 0 63 C -18 51 -73.44 -54.4 -70.56 -99.2 C -58.32 -134.4 -14.4 -158.4 4.32 -160 C 18.72 -148.8 48.96 -118.4 44.64 -83.2 C 51.84 -38.4 18 51 0 63 Z"/>
                <path id={innerPetalId} d="M 0 45 C -16.92 35 -46.06 -27.04 -47 -56.16 C -47.94 -83.2 -22.56 -104 0 -104 C 22.56 -104 47.94 -83.2 47 -56.16 C 46.06 -27.04 16.92 35 0 45 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(4 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(55.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(106.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(158.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(209.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[7]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(261.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.3" strokeLinejoin="round" transform="rotate(312.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -68 C 0 -78.96 0 -146.64 0 -188" fill="none" stroke={c[8]} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.62" transform="rotate(315) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="48" fill={c[9]}/>
                    <circle cx="256" cy="218" r="6" fill={c[10]}/>
                    <circle cx="270.542" cy="220.893" r="6" fill={c[11]}/>
                    <circle cx="282.87" cy="229.13" r="6" fill={c[10]}/>
                    <circle cx="291.107" cy="241.458" r="6" fill={c[11]}/>
                    <circle cx="294" cy="256" r="6" fill={c[10]}/>
                    <circle cx="291.107" cy="270.542" r="6" fill={c[11]}/>
                    <circle cx="282.87" cy="282.87" r="6" fill={c[10]}/>
                    <circle cx="270.542" cy="291.107" r="6" fill={c[11]}/>
                    <circle cx="256" cy="294" r="6" fill={c[10]}/>
                    <circle cx="241.458" cy="291.107" r="6" fill={c[11]}/>
                    <circle cx="229.13" cy="282.87" r="6" fill={c[10]}/>
                    <circle cx="220.893" cy="270.542" r="6" fill={c[11]}/>
                    <circle cx="218" cy="256" r="6" fill={c[10]}/>
                    <circle cx="220.893" cy="241.458" r="6" fill={c[11]}/>
                    <circle cx="229.13" cy="229.13" r="6" fill={c[10]}/>
                    <circle cx="241.458" cy="220.893" r="6" fill={c[11]}/>
                    <circle cx="256" cy="256" r="13" fill={c[10]}/>
            </g>
        </>
    );
}

export default Camellia;
