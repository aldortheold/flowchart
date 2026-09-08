import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    42.689809695775,
    39.000005796876,
    469.30990366885,
    463.000065421884,
]);

function Orchid({ colors }: FlowerProps) {
    const c = resolveColors("origami-orchid", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,48 -74,-115.01 0,-217" fill={c[0]}/>
                        <polygon points="0,48 0,-217 74,-115.01" fill={c[1]}/>
                        <polygon points="-74,-115.01 0,-91.14 74,-115.01" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,48 -74,-115.01 0,-217" fill={c[2]}/>
                        <polygon points="0,48 0,-217 74,-115.01" fill={c[0]}/>
                        <polygon points="-74,-115.01 0,-91.14 74,-115.01" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,48 -74,-115.01 0,-217" fill={c[1]}/>
                        <polygon points="0,48 0,-217 74,-115.01" fill={c[2]}/>
                        <polygon points="-74,-115.01 0,-91.14 74,-115.01" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(70)">
                        <polygon points="0,44 -108,-120.31 0,-227" fill={c[0]}/>
                        <polygon points="0,44 0,-227 108,-120.31" fill={c[3]}/>
                        <polygon points="-108,-120.31 0,-95.34 108,-120.31" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(290)">
                        <polygon points="0,44 -108,-120.31 0,-227" fill={c[3]}/>
                        <polygon points="0,44 0,-227 108,-120.31" fill={c[2]}/>
                        <polygon points="-108,-120.31 0,-95.34 108,-120.31" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180)">
                        <polygon points="0,40 -102,-109.71 0,-207" fill={c[2]}/>
                        <polygon points="0,40 0,-207 102,-109.71" fill={c[1]}/>
                        <polygon points="-102,-109.71 0,-86.94 102,-109.71" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,269 256,232 288.043,250.5" fill={c[4]}/>
                      <polygon points="256,269 288.043,250.5 288.043,287.5" fill={c[5]}/>
                      <polygon points="256,269 288.043,287.5 256,306" fill={c[6]}/>
                      <polygon points="256,269 256,306 223.957,287.5" fill={c[4]}/>
                      <polygon points="256,269 223.957,287.5 223.957,250.5" fill={c[5]}/>
                      <polygon points="256,269 223.957,250.5 256,232" fill={c[6]}/>
                    </g>
        </g>
    );
}

export default Orchid;
