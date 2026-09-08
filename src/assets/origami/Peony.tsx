import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    19.999995390626,
    19.999995390626,
    491.999892140649,
    491.999892140649,
]);

function Peony({ colors }: FlowerProps) {
    const c = resolveColors("origami-peony", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(30) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(60) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(150) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(210) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(300) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[0]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[1]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(330) scale(1)">
                        <polygon points="0,74 -66,-125.08 0,-236" fill={c[2]}/>
                        <polygon points="0,74 0,-236 66,-125.08" fill={c[3]}/>
                        <polygon points="-66,-125.08 0,-99.12 66,-125.08" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(18) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[0]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[1]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(54) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[3]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[0]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[1]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[3]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(126) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[0]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[1]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(162) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[3]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[0]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(198) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[1]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[3]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(234) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[0]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[1]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[3]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[0]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(306) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[1]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[3]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(342) scale(1)">
                        <polygon points="0,59 -56,-89.57 0,-169" fill={c[0]}/>
                        <polygon points="0,59 0,-169 56,-89.57" fill={c[1]}/>
                        <polygon points="-56,-89.57 0,-70.98 56,-89.57" fill={c[3]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(4) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[0]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(49) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[4]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[2]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(94) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[4]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(139) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[0]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(184) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[4]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[2]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(229) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[4]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(274) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[0]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(319) scale(1)">
                        <polygon points="0,44 -43,-56.18 0,-106" fill={c[4]}/>
                        <polygon points="0,44 0,-106 43,-56.18" fill={c[2]}/>
                        <polygon points="-43,-56.18 0,-44.52 43,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,214 285.698,226.302" fill={c[3]}/>
                      <polygon points="256,256 285.698,226.302 298,256" fill={c[0]}/>
                      <polygon points="256,256 298,256 285.698,285.698" fill={c[2]}/>
                      <polygon points="256,256 285.698,285.698 256,298" fill={c[3]}/>
                      <polygon points="256,256 256,298 226.302,285.698" fill={c[0]}/>
                      <polygon points="256,256 226.302,285.698 214,256" fill={c[2]}/>
                      <polygon points="256,256 214,256 226.302,226.302" fill={c[3]}/>
                      <polygon points="256,256 226.302,226.302 256,214" fill={c[0]}/>
                    </g>
        </g>
    );
}

export default Peony;
