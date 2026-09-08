import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    19.999995390626,
    19.999995390626,
    491.999892140649,
    491.999892140649,
]);

function Chrysanthemum({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-chrysanthemum", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 74 C -5.5 62 -22.44 -79.9 -21.56 -145.7 C -17.82 -197.4 -4.4 -232.65 1.32 -235 C 5.72 -218.55 14.96 -173.9 13.64 -122.2 C 15.84 -56.4 5.5 62 0 74 Z"/>
                <path id={middlePetalId} d="M 0 62 C -4.75 50 -14.82 -62.22 -12.54 -113.46 C -10.45 -153.72 -3.8 -181.17 -1.14 -183 C 7.22 -170.19 15.96 -135.42 16.34 -95.16 C 13.68 -43.92 4.75 50 0 62 Z"/>
                <path id={innerPetalId} d="M 0 46 C -4.5 34 -18.36 -41.14 -17.64 -75.02 C -14.58 -101.64 -3.6 -119.79 1.08 -121 C 4.68 -112.53 12.24 -89.54 11.16 -62.92 C 12.96 -29.04 4.5 34 0 46 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(15 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(30 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(105 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(150 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(165 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(195 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(210 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(255 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(285 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(330 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2" strokeLinejoin="round" transform="rotate(345 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(7.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(37.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(52.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(67.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(82.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(97.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(127.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(142.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(157.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(172.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(187.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(217.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(232.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(247.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(262.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(277.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(307.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(322.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(337.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="1.8" strokeLinejoin="round" transform="rotate(352.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(4.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(22.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(40.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(58.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(76.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(94.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(112.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(130.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(148.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(166.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(184.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(202.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(220.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(238.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(256.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(274.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(292.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(310.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(328.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="1.7" strokeLinejoin="round" transform="rotate(346.5 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="48" fill={c[1]}/>
                    <circle cx="256" cy="224" r="7" fill={c[7]}/>
                    <circle cx="272" cy="228.287" r="7" fill={c[2]}/>
                    <circle cx="283.713" cy="240" r="7" fill={c[8]}/>
                    <circle cx="288" cy="256" r="7" fill={c[7]}/>
                    <circle cx="283.713" cy="272" r="7" fill={c[2]}/>
                    <circle cx="272" cy="283.713" r="7" fill={c[8]}/>
                    <circle cx="256" cy="288" r="7" fill={c[7]}/>
                    <circle cx="240" cy="283.713" r="7" fill={c[2]}/>
                    <circle cx="228.287" cy="272" r="7" fill={c[8]}/>
                    <circle cx="224" cy="256" r="7" fill={c[7]}/>
                    <circle cx="228.287" cy="240" r="7" fill={c[2]}/>
                    <circle cx="240" cy="228.287" r="7" fill={c[8]}/>
                    <circle cx="256" cy="256" r="10" fill={c[0]}/>
            </g>
        </>
    );
}

export default Chrysanthemum;
