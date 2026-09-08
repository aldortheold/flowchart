import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    23.000009101566,
    23.000009101566,
    489.000198414143,
    489.000198414143,
]);

function Daisy({ colors }: FlowerProps) {
    const c = resolveColors("origami-daisy", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[1]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[3]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[1]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[3]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[1]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[3]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[0]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[1]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,77 -57,-123.49 0,-233" fill={c[2]}/>
                        <polygon points="0,77 0,-233 57,-123.49" fill={c[3]}/>
                        <polygon points="-57,-123.49 0,-97.86 57,-123.49" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,165 301.5,177.192" fill={c[4]}/>
                      <polygon points="256,256 301.5,177.192 334.808,210.5" fill={c[5]}/>
                      <polygon points="256,256 334.808,210.5 347,256" fill={c[6]}/>
                      <polygon points="256,256 347,256 334.808,301.5" fill={c[4]}/>
                      <polygon points="256,256 334.808,301.5 301.5,334.808" fill={c[5]}/>
                      <polygon points="256,256 301.5,334.808 256,347" fill={c[6]}/>
                      <polygon points="256,256 256,347 210.5,334.808" fill={c[4]}/>
                      <polygon points="256,256 210.5,334.808 177.192,301.5" fill={c[5]}/>
                      <polygon points="256,256 177.192,301.5 165,256" fill={c[6]}/>
                      <polygon points="256,256 165,256 177.192,210.5" fill={c[4]}/>
                      <polygon points="256,256 177.192,210.5 210.5,177.192" fill={c[5]}/>
                      <polygon points="256,256 210.5,177.192 256,165" fill={c[6]}/>
                    </g>
                    <g>
                      <polygon points="256,256 256,211 287.82,224.18" fill={c[7]}/>
                      <polygon points="256,256 287.82,224.18 301,256" fill={c[4]}/>
                      <polygon points="256,256 301,256 287.82,287.82" fill={c[8]}/>
                      <polygon points="256,256 287.82,287.82 256,301" fill={c[7]}/>
                      <polygon points="256,256 256,301 224.18,287.82" fill={c[4]}/>
                      <polygon points="256,256 224.18,287.82 211,256" fill={c[8]}/>
                      <polygon points="256,256 211,256 224.18,224.18" fill={c[7]}/>
                      <polygon points="256,256 224.18,224.18 256,211" fill={c[4]}/>
                    </g>
        </g>
    );
}

export default Daisy;
