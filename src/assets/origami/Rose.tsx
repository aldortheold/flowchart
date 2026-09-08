import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    25.000002707032,
    25.000002707032,
    487.000047824223,
    487.000047824223,
]);

function Rose({ colors }: FlowerProps) {
    const c = resolveColors("origami-rose", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(30) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(60) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(150) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(210) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(300) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[0]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[1]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(330) scale(1)">
                        <polygon points="0,72 -58,-122.43 0,-231" fill={c[2]}/>
                        <polygon points="0,72 0,-231 58,-122.43" fill={c[3]}/>
                        <polygon points="-58,-122.43 0,-97.02 58,-122.43" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(18) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[1]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[3]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(54) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[0]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[1]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[3]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[0]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(126) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[1]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[3]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(162) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[0]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[1]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(198) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[3]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[0]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(234) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[1]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[3]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[0]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[1]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(306) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[3]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[0]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(342) scale(1)">
                        <polygon points="0,58 -52,-86.92 0,-164" fill={c[1]}/>
                        <polygon points="0,58 0,-164 52,-86.92" fill={c[3]}/>
                        <polygon points="-52,-86.92 0,-68.88 52,-86.92" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(7.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[0]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[2]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(52.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[4]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[0]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(97.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[2]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[4]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(142.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[0]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[2]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(187.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[4]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[0]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(232.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[2]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[4]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(277.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[0]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[2]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[4]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(322.5) scale(1)">
                        <polygon points="0,43 -41,-54.59 0,-103" fill={c[4]}/>
                        <polygon points="0,43 0,-103 41,-54.59" fill={c[0]}/>
                        <polygon points="-41,-54.59 0,-43.26 41,-54.59" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,214 285.698,226.302" fill={c[4]}/>
                      <polygon points="256,256 285.698,226.302 298,256" fill={c[3]}/>
                      <polygon points="256,256 298,256 285.698,285.698" fill={c[0]}/>
                      <polygon points="256,256 285.698,285.698 256,298" fill={c[4]}/>
                      <polygon points="256,256 256,298 226.302,285.698" fill={c[3]}/>
                      <polygon points="256,256 226.302,285.698 214,256" fill={c[0]}/>
                      <polygon points="256,256 214,256 226.302,226.302" fill={c[4]}/>
                      <polygon points="256,256 226.302,226.302 256,214" fill={c[3]}/>
                    </g>
        </g>
    );
}

export default Rose;
