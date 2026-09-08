import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    28.400008001565,
    28.400008001565,
    483.600136026601,
    483.600136026601,
]);

function Anemone({ colors }: FlowerProps) {
    const petalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-anemone", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 72 C -37.08 62 -100.94 -58.76 -103 -122.04 C -105.06 -180.8 -49.44 -226 0 -226 C 49.44 -226 105.06 -180.8 103 -122.04 C 100.94 -58.76 37.08 62 0 72 Z"/>
                <path id={innerPetalId} d="M 0 58 C -28.08 48 -76.44 -46.28 -78 -96.12 C -79.56 -142.4 -37.44 -178 0 -178 C 37.44 -178 79.56 -142.4 78 -96.12 C 76.44 -46.28 28.08 48 0 58 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.7" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(45) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(135) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(225) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -64 C 0 -83.58 0 -155.22 0 -199" fill="none" stroke={c[7]} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.66" transform="rotate(315) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="92" fill={c[8]} stroke={c[9]} strokeWidth="4"/>
                    <circle cx="256" cy="183" r="6" fill={c[10]}/>
                    <circle cx="276.566" cy="185.957" r="4.5" fill={c[11]}/>
                    <circle cx="295.467" cy="194.588" r="6" fill={c[12]}/>
                    <circle cx="311.17" cy="208.195" r="4.5" fill={c[10]}/>
                    <circle cx="322.403" cy="225.675" r="6" fill={c[11]}/>
                    <circle cx="328.257" cy="245.611" r="4.5" fill={c[12]}/>
                    <circle cx="328.257" cy="266.389" r="6" fill={c[10]}/>
                    <circle cx="322.403" cy="286.325" r="4.5" fill={c[11]}/>
                    <circle cx="311.17" cy="303.805" r="6" fill={c[12]}/>
                    <circle cx="295.467" cy="317.412" r="4.5" fill={c[10]}/>
                    <circle cx="276.566" cy="326.043" r="6" fill={c[11]}/>
                    <circle cx="256" cy="329" r="4.5" fill={c[12]}/>
                    <circle cx="235.434" cy="326.043" r="6" fill={c[10]}/>
                    <circle cx="216.533" cy="317.412" r="4.5" fill={c[11]}/>
                    <circle cx="200.83" cy="303.805" r="6" fill={c[12]}/>
                    <circle cx="189.597" cy="286.325" r="4.5" fill={c[10]}/>
                    <circle cx="183.743" cy="266.389" r="6" fill={c[11]}/>
                    <circle cx="183.743" cy="245.611" r="4.5" fill={c[12]}/>
                    <circle cx="189.597" cy="225.675" r="6" fill={c[10]}/>
                    <circle cx="200.83" cy="208.195" r="4.5" fill={c[11]}/>
                    <circle cx="216.533" cy="194.588" r="6" fill={c[12]}/>
                    <circle cx="235.434" cy="185.957" r="4.5" fill={c[10]}/>
                    <circle cx="261.85" cy="208.358" r="5" fill={c[13]}/>
                    <circle cx="281.942" cy="215.614" r="5" fill={c[14]}/>
                    <circle cx="296.895" cy="230.869" r="5" fill={c[13]}/>
                    <circle cx="303.749" cy="251.102" r="5" fill={c[14]}/>
                    <circle cx="301.146" cy="272.304" r="5" fill={c[13]}/>
                    <circle cx="289.601" cy="290.278" r="5" fill={c[14]}/>
                    <circle cx="271.401" cy="301.462" r="5" fill={c[13]}/>
                    <circle cx="250.15" cy="303.642" r="5" fill={c[14]}/>
                    <circle cx="230.058" cy="296.386" r="5" fill={c[13]}/>
                    <circle cx="215.105" cy="281.131" r="5" fill={c[14]}/>
                    <circle cx="208.251" cy="260.898" r="5" fill={c[13]}/>
                    <circle cx="210.854" cy="239.696" r="5" fill={c[14]}/>
                    <circle cx="222.399" cy="221.722" r="5" fill={c[13]}/>
                    <circle cx="240.599" cy="210.538" r="5" fill={c[14]}/>
                    <circle cx="256" cy="256" r="24" fill={c[15]}/>
            </g>
        </>
    );
}

export default Anemone;
