import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    23.000009101566,
    23.000009101566,
    489.000198414143,
    489.000198414143,
]);

function Lotus({ colors }: FlowerProps) {
    const c = resolveColors("origami-lotus", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[1]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[3]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[1]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[3]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[1]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[3]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[1]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,75 -90,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,75 0,-233 90,-123.49" fill={c[3]}/>
                        <polygon points="-90,-123.49 0,-97.86 90,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(22.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[0]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[1]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(67.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[0]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(112.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[3]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(157.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[0]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[1]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(202.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[0]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(247.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[3]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(292.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[0]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[1]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(337.5) scale(1)">
                        <polygon points="0,60 -66,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,60 0,-171 66,-90.63" fill={c[0]}/>
                        <polygon points="-66,-90.63 0,-71.82 66,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[2]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[0]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[3]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[2]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[0]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[3]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[2]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,42 -41,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 41,-56.18" fill={c[0]}/>
                        <polygon points="-41,-56.18 0,-44.52 41,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,217 283.577,228.423" fill={c[4]}/>
                      <polygon points="256,256 283.577,228.423 295,256" fill={c[5]}/>
                      <polygon points="256,256 295,256 283.577,283.577" fill={c[6]}/>
                      <polygon points="256,256 283.577,283.577 256,295" fill={c[4]}/>
                      <polygon points="256,256 256,295 228.423,283.577" fill={c[5]}/>
                      <polygon points="256,256 228.423,283.577 217,256" fill={c[6]}/>
                      <polygon points="256,256 217,256 228.423,228.423" fill={c[4]}/>
                      <polygon points="256,256 228.423,228.423 256,217" fill={c[5]}/>
                    </g>
        </g>
    );
}

export default Lotus;
