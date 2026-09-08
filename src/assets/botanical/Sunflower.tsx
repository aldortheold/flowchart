import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    28.600088828091,
    28.600088828091,
    483.399914725033,
    483.399914725033,
]);

function Sunflower({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-sunflower", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 76 C -14.88 60 -31 -72.32 -27.28 -133.34 C -22.32 -176.28 -6.2 -216.96 0 -226 C 6.2 -216.96 22.32 -176.28 27.28 -133.34 C 31 -72.32 14.88 60 0 76 Z"/>
                <path id={innerPetalId} d="M 0 72 C -12.96 56 -27 -56.96 -23.76 -105.02 C -19.44 -138.84 -5.4 -170.88 0 -178 C 5.4 -170.88 19.44 -138.84 23.76 -105.02 C 27 -56.96 12.96 56 0 72 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(18 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(36 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(54 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(72 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(108 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(126 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(144 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(162 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(198 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(216 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(234 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(252 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(288 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(306 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(324 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(342 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(9 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(27 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(63 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(81 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(99 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(117 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(153 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(171 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(189 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(207 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(243 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(261 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(279 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(297 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(333 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[6]} stroke={c[5]} strokeWidth="2.4" strokeLinejoin="round" transform="rotate(351 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(18) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(36) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(54) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(72) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(108) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(126) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(144) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(162) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(198) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(216) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(234) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(252) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(288) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(306) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(324) scale(1)"/>
                      <path d="M 0 -84 C 0 -84.84 0 -157.56 0 -202" fill="none" stroke={c[7]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(342) scale(1)"/>
                    </g>
                    <circle cx="256" cy="256" r="113" fill={c[8]} stroke={c[9]} strokeWidth="5"/>
                    <circle cx="256" cy="256" r="101" fill={c[10]}/>
                    <circle cx="256" cy="247.514" r="4.514" fill={c[11]}/>
                    <circle cx="264.598" cy="265.386" r="4.471" fill={c[12]}/>
                    <circle cx="240.185" cy="254.612" r="4.439" fill={c[13]}/>
                    <circle cx="270.677" cy="244.747" r="4.412" fill={c[14]}/>
                    <circle cx="252.379" cy="276.468" r="4.389" fill={c[11]}/>
                    <circle cx="243.737" cy="236.721" r="4.368" fill={c[12]}/>
                    <circle cx="279.892" cy="262.423" r="4.349" fill={c[13]}/>
                    <circle cx="232.485" cy="268.212" r="4.331" fill={c[14]}/>
                    <circle cx="265.655" cy="229.564" r="4.314" fill={c[11]}/>
                    <circle cx="267.331" cy="283.454" r="4.298" fill={c[12]}/>
                    <circle cx="227.761" cy="242.784" r="4.283" fill={c[13]}/>
                    <circle cx="287.097" cy="246.248" r="4.269" fill={c[14]}/>
                    <circle cx="238.979" cy="285.367" r="4.255" fill={c[11]}/>
                    <circle cx="248.434" cy="221.577" r="4.242" fill={c[12]}/>
                    <circle cx="285.857" cy="276.993" r="4.229" fill={c[13]}/>
                    <circle cx="218.601" cy="260.844" r="4.217" fill={c[14]}/>
                    <circle cx="281.062" cy="226.267" r="4.205" fill={c[11]}/>
                    <circle cx="257.651" cy="295.993" r="4.194" fill={c[12]}/>
                    <circle cx="226.985" cy="226.839" r="4.182" fill={c[13]}/>
                    <circle cx="298.171" cy="257.953" r="4.171" fill={c[14]}/>
                    <circle cx="222.776" cy="283.72" r="4.161" fill={c[11]}/>
                    <circle cx="261.911" cy="212.099" r="4.15" fill={c[12]}/>
                    <circle cx="281.87" cy="293.189" r="4.14" fill={c[13]}/>
                    <circle cx="210.845" cy="245.837" r="4.13" fill={c[14]}/>
                    <circle cx="296.996" cy="232.514" r="4.12" fill={c[11]}/>
                    <circle cx="241.349" cy="301.909" r="4.111" fill={c[12]}/>
                    <circle cx="235.405" cy="211.412" r="4.101" fill={c[13]}/>
                    <circle cx="302.143" cy="275.317" r="4.092" fill={c[14]}/>
                    <circle cx="208.088" cy="273.227" r="4.083" fill={c[11]}/>
                    <circle cx="280.1" cy="210.158" r="4.074" fill={c[12]}/>
                    <circle cx="269.414" cy="306.915" r="4.065" fill={c[13]}/>
                    <circle cx="211.003" cy="227.059" r="4.057" fill={c[14]}/>
                    <circle cx="309.552" cy="246.804" r="4.048" fill={c[11]}/>
                    <circle cx="222.221" cy="299.604" r="4.04" fill={c[12]}/>
                    <circle cx="251.387" cy="200.223" r="4.032" fill={c[13]}/>
                    <circle cx="297.664" cy="294.555" r="4.024" fill={c[14]}/>
                    <circle cx="198.447" cy="255.711" r="4.016" fill={c[11]}/>
                    <circle cx="299.209" cy="216.815" r="4.008" fill={c[12]}/>
                    <circle cx="250.537" cy="314.844" r="4" fill={c[13]}/>
                    <circle cx="219.823" cy="208.317" r="3.992" fill={c[14]}/>
                    <circle cx="315.62" cy="266.856" r="3.985" fill={c[11]}/>
                    <circle cx="204.08" cy="288.661" r="3.977" fill={c[12]}/>
                    <circle cx="272.416" cy="196.142" r="3.97" fill={c[13]}/>
                    <circle cx="284.658" cy="311.868" r="3.962" fill={c[14]}/>
                    <circle cx="196.462" cy="233.915" r="3.955" fill={c[11]}/>
                    <circle cx="315.472" cy="231.802" r="3.948" fill={c[12]}/>
                    <circle cx="228.193" cy="314.645" r="3.941" fill={c[13]}/>
                    <circle cx="236.687" cy="193.314" r="3.934" fill={c[14]}/>
                    <circle cx="313.173" cy="289.522" r="3.927" fill={c[11]}/>
                    <circle cx="190.538" cy="270.043" r="3.92" fill={c[12]}/>
                    <circle cx="295.171" cy="200.881" r="3.913" fill={c[13]}/>
                    <circle cx="264.43" cy="323.761" r="3.907" fill={c[14]}/>
                    <circle cx="203.513" cy="211.305" r="3.9" fill={c[11]}/>
                    <circle cx="325.543" cy="253.479" r="3.893" fill={c[12]}/>
                    <circle cx="205.965" cy="305.286" r="3.887" fill={c[13]}/>
                    <circle cx="259.635" cy="185.223" r="3.88" fill={c[14]}/>
                    <circle cx="301.531" cy="311.132" r="3.874" fill={c[11]}/>
                    <circle cx="184.565" cy="246.016" r="3.868" fill={c[12]}/>
                    <circle cx="315.93" cy="214.756" r="3.861" fill={c[13]}/>
                    <circle cx="239.531" cy="327.494" r="3.855" fill={c[14]}/>
                    <circle cx="219.549" cy="191.626" r="3.849" fill={c[11]}/>
                    <circle cx="326.938" cy="279.033" r="3.843" fill={c[12]}/>
                    <circle cx="187.587" cy="287.183" r="3.837" fill={c[13]}/>
                    <circle cx="285.615" cy="186.246" r="3.831" fill={c[14]}/>
                    <circle cx="281.478" cy="327.997" r="3.825" fill={c[11]}/>
                    <circle cx="188.062" cy="219.846" r="3.819" fill={c[12]}/>
                    <circle cx="331.081" cy="236.622" r="3.813" fill={c[13]}/>
                    <circle cx="213.412" cy="321.49" r="3.807" fill={c[14]}/>
                    <circle cx="243.071" cy="178.375" r="3.801" fill={c[11]}/>
                    <circle cx="318.416" cy="304.856" r="3.795" fill={c[12]}/>
                    <circle cx="176.41" cy="262.18" r="3.789" fill={c[13]}/>
                    <circle cx="310.897" cy="197.271" r="3.784" fill={c[14]}/>
                    <circle cx="255.186" cy="336.945" r="3.778" fill={c[11]}/>
                    <circle cx="201.552" cy="195.351" r="3.772" fill={c[12]}/>
                    <circle cx="337.663" cy="263.996" r="3.767" fill={c[13]}/>
                    <circle cx="189.946" cy="305.595" r="3.761" fill={c[14]}/>
                    <circle cx="271.306" cy="174.277" r="3.756" fill={c[11]}/>
                    <circle cx="300.201" cy="327.057" r="3.75" fill={c[12]}/>
                    <circle cx="174.893" cy="233.318" r="3.745" fill={c[13]}/>
                    <circle cx="331.603" cy="217.698" r="3.739" fill={c[14]}/>
                    <circle cx="225.939" cy="335.807" r="3.734" fill={c[11]}/>
                    <circle cx="224.062" cy="176.358" r="3.729" fill={c[12]}/>
                    <circle cx="333.819" cy="293.378" r="3.723" fill={c[13]}/>
                    <circle cx="172.873" cy="281.155" r="3.718" fill={c[14]}/>
                    <circle cx="300.568" cy="180.856" r="3.713" fill={c[11]}/>
                    <circle cx="274.001" cy="342.017" r="3.708" fill={c[12]}/>
                    <circle cx="184.208" cy="204.435" r="3.702" fill={c[13]}/>
                    <circle cx="344.272" cy="245.468" r="3.697" fill={c[14]}/>
                    <circle cx="197.695" cy="323.776" r="3.692" fill={c[11]}/>
                    <circle cx="253.195" cy="166.138" r="3.687" fill={c[12]}/>
                    <circle cx="319.117" cy="320.724" r="3.682" fill={c[13]}/>
                    <circle cx="165.243" cy="250.881" r="3.677" fill={c[14]}/>
                    <circle cx="244" cy="237" r="18" fill={c[15]} opacity="0.5"/>
            </g>
        </>
    );
}

export default Sunflower;
