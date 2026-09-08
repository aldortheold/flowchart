import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    20.999994492189,
    20.999994492189,
    490.999865976599,
    490.999865976599,
]);

function Anemone({ colors }: FlowerProps) {
    const c = resolveColors("origami-anemone", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[1]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[3]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[1]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[3]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[1]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[3]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[1]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,72 -110,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,72 0,-235 110,-124.55" fill={c[3]}/>
                        <polygon points="-110,-124.55 0,-98.7 110,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,157 298.954,166.804" fill={c[4]}/>
                      <polygon points="256,256 298.954,166.804 333.401,194.275" fill={c[3]}/>
                      <polygon points="256,256 333.401,194.275 352.518,233.97" fill={c[5]}/>
                      <polygon points="256,256 352.518,233.97 352.518,278.03" fill={c[4]}/>
                      <polygon points="256,256 352.518,278.03 333.401,317.725" fill={c[3]}/>
                      <polygon points="256,256 333.401,317.725 298.954,345.196" fill={c[5]}/>
                      <polygon points="256,256 298.954,345.196 256,355" fill={c[4]}/>
                      <polygon points="256,256 256,355 213.046,345.196" fill={c[3]}/>
                      <polygon points="256,256 213.046,345.196 178.599,317.725" fill={c[5]}/>
                      <polygon points="256,256 178.599,317.725 159.482,278.03" fill={c[4]}/>
                      <polygon points="256,256 159.482,278.03 159.482,233.97" fill={c[3]}/>
                      <polygon points="256,256 159.482,233.97 178.599,194.275" fill={c[5]}/>
                      <polygon points="256,256 178.599,194.275 213.046,166.804" fill={c[4]}/>
                      <polygon points="256,256 213.046,166.804 256,157" fill={c[3]}/>
                    </g>
                    <g>
                      <polygon points="256,256 256,202 287.74,212.313" fill={c[4]}/>
                      <polygon points="256,256 287.74,212.313 307.357,239.313" fill={c[6]}/>
                      <polygon points="256,256 307.357,239.313 307.357,272.687" fill={c[7]}/>
                      <polygon points="256,256 307.357,272.687 287.74,299.687" fill={c[4]}/>
                      <polygon points="256,256 287.74,299.687 256,310" fill={c[6]}/>
                      <polygon points="256,256 256,310 224.26,299.687" fill={c[7]}/>
                      <polygon points="256,256 224.26,299.687 204.643,272.687" fill={c[4]}/>
                      <polygon points="256,256 204.643,272.687 204.643,239.313" fill={c[6]}/>
                      <polygon points="256,256 204.643,239.313 224.26,212.313" fill={c[7]}/>
                      <polygon points="256,256 224.26,212.313 256,202" fill={c[4]}/>
                    </g>
        </g>
    );
}

export default Anemone;
