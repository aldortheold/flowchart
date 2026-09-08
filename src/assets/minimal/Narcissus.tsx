import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    53.296615484018,
    22.000001828125,
    458.703732912723,
    490.000042046879,
]);

function Narcissus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("minimal-narcissus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 70 C -43.68 54 -91 -74.88 -80.08 -138.06 C -65.52 -182.52 -18.2 -224.64 0 -234 C 18.2 -224.64 65.52 -182.52 80.08 -138.06 C 91 -74.88 43.68 54 0 70 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[1]} transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[1]} transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <path d="M 256 151 C 263.484 150.937 275.093 168.661 283.455 171.501 C 291.818 174.341 311.199 167.31 317.189 171.781 C 323.178 176.251 321.892 197.17 327.28 204.212 C 332.667 211.255 354.452 216.233 356.609 223.31 C 358.765 230.388 343.134 247.089 343.059 256 C 342.984 264.911 358.152 281.386 356.063 288.512 C 353.973 295.639 333.091 301.087 327.773 308.146 C 322.454 315.205 323.226 335.808 317.146 340.161 C 311.067 344.513 291.647 337.057 283.291 339.993 C 274.934 342.928 263.404 361.807 256 361.637 C 248.596 361.468 237.581 341.532 229.113 338.75 C 220.645 335.968 200.155 345.478 194.039 341.282 C 187.923 337.086 189.41 315.312 184.36 308.049 C 179.31 300.786 159.395 295.251 157.09 288.138 C 154.784 281.024 167.681 264.846 167.491 256 C 167.301 247.154 153.225 230.4 155.702 223.411 C 158.179 216.422 180.388 212.082 185.613 204.861 C 190.837 197.639 188.043 175.066 193.931 170.569 C 199.819 166.073 220.212 174.637 228.695 171.962 C 237.177 169.288 248.516 151.063 256 151 Z" fill={c[4]}/>
                    <circle cx="256" cy="256" r="55" fill={c[5]}/>
                    <circle cx="244" cy="241" r="25" fill={c[6]}/>
            </g>
        </>
    );
}

export default Narcissus;
