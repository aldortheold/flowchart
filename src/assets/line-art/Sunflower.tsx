import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    19.500207861411,
    19.500207861411,
    492.500396322424,
    492.500396322424,
]);

function Sunflower({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("line-art-sunflower", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 82 C -14.88 66 -31 -74.88 -27.28 -138.06 C -22.32 -182.52 -6.2 -224.64 0 -234 C 6.2 -224.64 22.32 -182.52 27.28 -138.06 C 31 -74.88 14.88 66 0 82 Z"/>
                <path id={innerPetalId} d="M 0 75 C -12.48 59 -26 -57.28 -22.88 -105.61 C -18.72 -139.62 -5.2 -171.84 0 -179 C 5.2 -171.84 18.72 -139.62 22.88 -105.61 C 26 -57.28 12.48 59 0 75 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(18 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(36 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(54 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(108 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(126 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(162 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(198 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(234 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(252 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(306 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(324 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill="none" stroke={c[0]} strokeWidth="5" strokeLinejoin="round" transform="rotate(342 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(9 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(27 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(63 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(81 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(99 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(117 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(153 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(171 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(189 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(207 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(243 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(261 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(279 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(297 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(333 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill="none" stroke={c[1]} strokeWidth="4.5" strokeLinejoin="round" transform="rotate(351 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <circle cx="256" cy="256" r="112" fill="none" stroke={c[0]} strokeWidth="7"/>
                    <circle cx="256" cy="256" r="92" fill="none" stroke={c[1]} strokeWidth="4"/>
                    <circle cx="256" cy="246.252" r="3.926" fill={c[0]}/>
                    <circle cx="265.877" cy="266.782" r="3.889" fill={c[0]}/>
                    <circle cx="237.833" cy="254.406" r="3.862" fill={c[0]}/>
                    <circle cx="272.86" cy="243.074" r="3.839" fill={c[0]}/>
                    <circle cx="251.841" cy="279.512" r="3.819" fill={c[0]}/>
                    <circle cx="241.913" cy="233.854" r="3.801" fill={c[0]}/>
                    <circle cx="283.445" cy="263.379" r="3.784" fill={c[0]}/>
                    <circle cx="228.988" cy="270.028" r="3.769" fill={c[0]}/>
                    <circle cx="267.091" cy="225.632" r="3.755" fill={c[0]}/>
                    <circle cx="269.017" cy="287.537" r="3.741" fill={c[0]}/>
                    <circle cx="223.561" cy="240.818" r="3.728" fill={c[0]}/>
                    <circle cx="291.722" cy="244.797" r="3.716" fill={c[0]}/>
                    <circle cx="236.448" cy="289.735" r="3.704" fill={c[0]}/>
                    <circle cx="247.309" cy="216.458" r="3.693" fill={c[0]}/>
                    <circle cx="290.298" cy="280.115" r="3.682" fill={c[0]}/>
                    <circle cx="213.038" cy="261.564" r="3.671" fill={c[0]}/>
                    <circle cx="284.79" cy="221.845" r="3.661" fill={c[0]}/>
                    <circle cx="257.897" cy="301.941" r="3.651" fill={c[0]}/>
                    <circle cx="222.67" cy="222.502" r="3.641" fill={c[0]}/>
                    <circle cx="304.443" cy="258.244" r="3.632" fill={c[0]}/>
                    <circle cx="217.835" cy="287.843" r="3.623" fill={c[0]}/>
                    <circle cx="262.79" cy="205.57" r="3.614" fill={c[0]}/>
                    <circle cx="285.717" cy="298.72" r="3.605" fill={c[0]}/>
                    <circle cx="204.129" cy="244.326" r="3.596" fill={c[0]}/>
                    <circle cx="303.093" cy="229.021" r="3.588" fill={c[0]}/>
                    <circle cx="239.17" cy="308.737" r="3.58" fill={c[0]}/>
                    <circle cx="232.342" cy="204.78" r="3.572" fill={c[0]}/>
                    <circle cx="309.005" cy="278.19" r="3.564" fill={c[0]}/>
                    <circle cx="200.962" cy="275.789" r="3.556" fill={c[0]}/>
                    <circle cx="283.685" cy="203.34" r="3.548" fill={c[0]}/>
                    <circle cx="271.41" cy="314.488" r="3.541" fill={c[0]}/>
                    <circle cx="204.31" cy="222.755" r="3.534" fill={c[0]}/>
                    <circle cx="317.516" cy="245.436" r="3.526" fill={c[0]}/>
                    <circle cx="217.197" cy="306.089" r="3.519" fill={c[0]}/>
                    <circle cx="250.701" cy="191.927" r="3.512" fill={c[0]}/>
                    <circle cx="303.861" cy="300.289" r="3.505" fill={c[0]}/>
                    <circle cx="189.888" cy="255.668" r="3.498" fill={c[0]}/>
                    <circle cx="305.635" cy="210.988" r="3.491" fill={c[0]}/>
                    <circle cx="249.725" cy="323.595" r="3.485" fill={c[0]}/>
                    <circle cx="214.442" cy="201.226" r="3.478" fill={c[0]}/>
                    <circle cx="324.487" cy="268.471" r="3.472" fill={c[0]}/>
                    <circle cx="196.358" cy="293.518" r="3.465" fill={c[0]}/>
                    <circle cx="274.857" cy="187.239" r="3.459" fill={c[0]}/>
                    <circle cx="288.92" cy="320.177" r="3.453" fill={c[0]}/>
                    <circle cx="187.607" cy="230.63" r="3.446" fill={c[0]}/>
                    <circle cx="324.318" cy="228.204" r="3.44" fill={c[0]}/>
                    <circle cx="224.058" cy="323.368" r="3.434" fill={c[0]}/>
                    <circle cx="233.814" cy="183.991" r="3.428" fill={c[0]}/>
                    <circle cx="321.677" cy="294.508" r="3.422" fill={c[0]}/>
                    <circle cx="180.802" cy="272.132" r="3.416" fill={c[0]}/>
                    <circle cx="300.997" cy="192.683" r="3.41" fill={c[0]}/>
                    <circle cx="265.684" cy="333.838" r="3.405" fill={c[0]}/>
                    <circle cx="195.707" cy="204.657" r="3.399" fill={c[0]}/>
                    <circle cx="335.886" cy="253.104" r="3.393" fill={c[0]}/>
                    <circle cx="198.524" cy="312.616" r="3.388" fill={c[0]}/>
                    <circle cx="260.176" cy="174.697" r="3.382" fill={c[0]}/>
                    <circle cx="308.303" cy="319.331" r="3.377" fill={c[0]}/>
                    <circle cx="173.941" cy="244.532" r="3.371" fill={c[0]}/>
            </g>
        </>
    );
}

export default Sunflower;
