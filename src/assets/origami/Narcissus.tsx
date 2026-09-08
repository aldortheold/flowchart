import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    49.886004455605,
    18.000004648439,
    462.114040631836,
    494.000116210965,
]);

function Narcissus({ colors }: FlowerProps) {
    const c = resolveColors("origami-narcissus", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[0]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[1]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(60) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[2]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[3]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[0]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[1]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[2]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[3]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[0]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[1]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(300) scale(1)">
                        <polygon points="0,71 -92,-126.14 0,-238" fill={c[2]}/>
                        <polygon points="0,71 0,-238 92,-126.14" fill={c[3]}/>
                        <polygon points="-92,-126.14 0,-99.96 92,-126.14" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,148 310,162.469" fill={c[4]}/>
                      <polygon points="256,256 310,162.469 349.531,202" fill={c[5]}/>
                      <polygon points="256,256 349.531,202 364,256" fill={c[6]}/>
                      <polygon points="256,256 364,256 349.531,310" fill={c[4]}/>
                      <polygon points="256,256 349.531,310 310,349.531" fill={c[5]}/>
                      <polygon points="256,256 310,349.531 256,364" fill={c[6]}/>
                      <polygon points="256,256 256,364 202,349.531" fill={c[4]}/>
                      <polygon points="256,256 202,349.531 162.469,310" fill={c[5]}/>
                      <polygon points="256,256 162.469,310 148,256" fill={c[6]}/>
                      <polygon points="256,256 148,256 162.469,202" fill={c[4]}/>
                      <polygon points="256,256 162.469,202 202,162.469" fill={c[5]}/>
                      <polygon points="256,256 202,162.469 256,148" fill={c[6]}/>
                    </g>
                    <g>
                      <polygon points="256,256 256,199 289.504,209.886" fill={c[7]}/>
                      <polygon points="256,256 289.504,209.886 310.21,238.386" fill={c[8]}/>
                      <polygon points="256,256 310.21,238.386 310.21,273.614" fill={c[9]}/>
                      <polygon points="256,256 310.21,273.614 289.504,302.114" fill={c[7]}/>
                      <polygon points="256,256 289.504,302.114 256,313" fill={c[8]}/>
                      <polygon points="256,256 256,313 222.496,302.114" fill={c[9]}/>
                      <polygon points="256,256 222.496,302.114 201.79,273.614" fill={c[7]}/>
                      <polygon points="256,256 201.79,273.614 201.79,238.386" fill={c[8]}/>
                      <polygon points="256,256 201.79,238.386 222.496,209.886" fill={c[9]}/>
                      <polygon points="256,256 222.496,209.886 256,199" fill={c[7]}/>
                    </g>
        </g>
    );
}

export default Narcissus;
