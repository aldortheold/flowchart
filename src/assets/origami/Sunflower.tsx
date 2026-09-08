import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    18.999996296876,
    18.999996296876,
    492.999898164084,
    492.999898164084,
]);

function Sunflower({ colors }: FlowerProps) {
    const c = resolveColors("origami-sunflower", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(22.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[2]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[0]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[1]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[2]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(67.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[2]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[0]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(112.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[1]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[2]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(157.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[2]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[0]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[1]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[2]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(202.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[2]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[0]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(247.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[1]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[2]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(292.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[2]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[0]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[1]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[2]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(337.5) scale(1)">
                        <polygon points="0,82 -35,-125.61 0,-237" fill={c[0]}/>
                        <polygon points="0,82 0,-237 35,-125.61" fill={c[1]}/>
                        <polygon points="-35,-125.61 0,-99.54 35,-125.61" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(11.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(33.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[3]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[1]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(56.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[2]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[3]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(78.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(101.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[3]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[1]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(123.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[2]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[3]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(146.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(168.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[3]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[1]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(191.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[2]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[3]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(213.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(236.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[3]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[1]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(258.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[2]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[3]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(281.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(303.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[3]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[1]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(326.25) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[2]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[3]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(348.75) scale(1)">
                        <polygon points="0,76 -28,-94.87 0,-179" fill={c[1]}/>
                        <polygon points="0,76 0,-179 28,-94.87" fill={c[2]}/>
                        <polygon points="-28,-94.87 0,-75.18 28,-94.87" fill={c[3]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,143 299.243,151.602" fill={c[4]}/>
                      <polygon points="256,256 299.243,151.602 335.903,176.097" fill={c[5]}/>
                      <polygon points="256,256 335.903,176.097 360.398,212.757" fill={c[6]}/>
                      <polygon points="256,256 360.398,212.757 369,256" fill={c[7]}/>
                      <polygon points="256,256 369,256 360.398,299.243" fill={c[4]}/>
                      <polygon points="256,256 360.398,299.243 335.903,335.903" fill={c[5]}/>
                      <polygon points="256,256 335.903,335.903 299.243,360.398" fill={c[6]}/>
                      <polygon points="256,256 299.243,360.398 256,369" fill={c[7]}/>
                      <polygon points="256,256 256,369 212.757,360.398" fill={c[4]}/>
                      <polygon points="256,256 212.757,360.398 176.097,335.903" fill={c[5]}/>
                      <polygon points="256,256 176.097,335.903 151.602,299.243" fill={c[6]}/>
                      <polygon points="256,256 151.602,299.243 143,256" fill={c[7]}/>
                      <polygon points="256,256 143,256 151.602,212.757" fill={c[4]}/>
                      <polygon points="256,256 151.602,212.757 176.097,176.097" fill={c[5]}/>
                      <polygon points="256,256 176.097,176.097 212.757,151.602" fill={c[6]}/>
                      <polygon points="256,256 212.757,151.602 256,143" fill={c[7]}/>
                    </g>
                    <g>
                      <polygon points="256,256 256,196 286,204.038" fill={c[8]}/>
                      <polygon points="256,256 286,204.038 307.962,226" fill={c[9]}/>
                      <polygon points="256,256 307.962,226 316,256" fill={c[10]}/>
                      <polygon points="256,256 316,256 307.962,286" fill={c[8]}/>
                      <polygon points="256,256 307.962,286 286,307.962" fill={c[9]}/>
                      <polygon points="256,256 286,307.962 256,316" fill={c[10]}/>
                      <polygon points="256,256 256,316 226,307.962" fill={c[8]}/>
                      <polygon points="256,256 226,307.962 204.038,286" fill={c[9]}/>
                      <polygon points="256,256 204.038,286 196,256" fill={c[10]}/>
                      <polygon points="256,256 196,256 204.038,226" fill={c[8]}/>
                      <polygon points="256,256 204.038,226 226,204.038" fill={c[9]}/>
                      <polygon points="256,256 226,204.038 256,196" fill={c[10]}/>
                    </g>
        </g>
    );
}

export default Sunflower;
