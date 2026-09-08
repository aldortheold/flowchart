import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    31.850009456331,
    31.850009456331,
    480.150146398013,
    480.150146398013,
]);

function Peony({ colors }: FlowerProps) {
    const outerPetalId = useId();
    const middlePetalId = useId();
    const innerPetalId = useId();
    const c = resolveColors("botanical-peony", colors);

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M 0 76 C -30.24 68 -63.36 -55 -69.12 -101.2 C -80.64 -127.6 -64.8 -156.2 -50.4 -165 C -52.56 -200.2 -27.36 -224.4 -10.08 -204.6 C -3.6 -228.8 3.6 -228.8 10.08 -204.6 C 27.36 -224.4 52.56 -200.2 50.4 -165 C 64.8 -156.2 80.64 -127.6 69.12 -101.2 C 63.36 -55 30.24 68 0 76 Z"/>
                <path id={middlePetalId} d="M 0 64 C -25.62 56 -53.68 -41.5 -58.56 -76.36 C -68.32 -96.28 -54.9 -117.86 -42.7 -124.5 C -44.53 -151.06 -23.18 -169.32 -8.54 -154.38 C -3.05 -172.64 3.05 -172.64 8.54 -154.38 C 23.18 -169.32 44.53 -151.06 42.7 -124.5 C 54.9 -117.86 68.32 -96.28 58.56 -76.36 C 53.68 -41.5 25.62 56 0 64 Z"/>
                <path id={innerPetalId} d="M 0 48 C -10.5 36 -42.84 -37.74 -41.16 -68.82 C -34.02 -93.24 -8.4 -109.89 2.52 -111 C 10.92 -103.23 28.56 -82.14 26.04 -57.72 C 30.24 -26.64 10.5 36 0 48 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(30 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(90 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(150 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(210 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(270 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${outerPetalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="2.8" strokeLinejoin="round" transform="rotate(330 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(15 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(45 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(75 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(105 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(135 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(165 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(195 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(225 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(255 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(285 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[5]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(315 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${middlePetalId}`} x="256" y="256" fill={c[6]} stroke={c[1]} strokeWidth="2.6" strokeLinejoin="round" transform="rotate(345 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(4 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(29.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[8]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(55.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(81.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(106.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(132.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[8]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(158.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(184 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(209.714 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(235.429 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[8]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(261.143 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[1]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(286.857 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[0]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(312.571 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${innerPetalId}`} x="256" y="256" fill={c[5]} stroke={c[7]} strokeWidth="2.2" strokeLinejoin="round" transform="rotate(338.286 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(30) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(60) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(90) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(120) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(150) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(210) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(240) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(270) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(300) scale(1)"/>
                      <path d="M 0 -70 C 0 -79.8 0 -148.2 0 -190" fill="none" stroke={c[9]} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.58" transform="rotate(330) scale(1)"/>
                    </g>
                    <path d="M 264.043 190.492 C 268.184 190.873 272.117 208.425 277.002 210.961 C 281.887 213.496 296.892 206.085 299.785 209.046 C 302.678 212.007 295.087 227.971 298.168 232.626 C 301.25 237.281 321.838 239.144 322.331 243.107 C 322.824 247.069 302.612 256.022 301.774 261.62 C 300.937 267.219 317.516 280.233 316.201 284.072 C 314.886 287.911 296.135 285.892 292.152 289.712 C 288.169 293.533 290.728 310.109 287.055 312.025 C 283.383 313.942 270.644 302.268 265.279 303.737 C 259.914 305.205 251.727 323.598 247.801 322.773 C 243.875 321.949 241.661 300.152 236.552 297.706 C 231.444 295.26 213.634 307.322 210.423 304.875 C 207.211 302.429 215.41 284.816 213.053 279.806 C 210.696 274.795 193.955 272.282 193.175 268.212 C 192.395 264.142 207.05 255.56 207.347 250.026 C 207.645 244.492 193.3 231.19 195.351 227.719 C 197.401 224.247 218.516 228.79 222.353 224.624 C 226.189 220.457 220.095 199.478 223.423 197.229 C 226.751 194.981 241.151 209.091 246.703 208.171 C 252.254 207.25 259.902 190.111 264.043 190.492 Z" fill={c[1]} stroke={c[7]} strokeWidth="2.5"/>
                    <circle cx="256" cy="217" r="6" fill={c[0]}/>
                    <circle cx="278.924" cy="224.448" r="6" fill={c[3]}/>
                    <circle cx="293.091" cy="243.948" r="6" fill={c[0]}/>
                    <circle cx="293.091" cy="268.052" r="6" fill={c[3]}/>
                    <circle cx="278.924" cy="287.552" r="6" fill={c[0]}/>
                    <circle cx="256" cy="295" r="6" fill={c[3]}/>
                    <circle cx="233.076" cy="287.552" r="6" fill={c[0]}/>
                    <circle cx="218.909" cy="268.052" r="6" fill={c[3]}/>
                    <circle cx="218.909" cy="243.948" r="6" fill={c[0]}/>
                    <circle cx="233.076" cy="224.448" r="6" fill={c[3]}/>
                    <circle cx="256" cy="256" r="18" fill={c[0]}/>
            </g>
        </>
    );
}

export default Peony;
