import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    32.501687587631,
    20.999994187828,
    479.498514957806,
    446.11887386673,
]);

function ForgetMeNot({ colors }: FlowerProps) {
    const c = resolveColors("origami-forget-me-not", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,68 -121,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,68 0,-235 121,-124.55" fill={c[1]}/>
                        <polygon points="-121,-124.55 0,-98.7 121,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(72) scale(1)">
                        <polygon points="0,68 -121,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,68 0,-235 121,-124.55" fill={c[3]}/>
                        <polygon points="-121,-124.55 0,-98.7 121,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(144) scale(1)">
                        <polygon points="0,68 -121,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,68 0,-235 121,-124.55" fill={c[1]}/>
                        <polygon points="-121,-124.55 0,-98.7 121,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(216) scale(1)">
                        <polygon points="0,68 -121,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,68 0,-235 121,-124.55" fill={c[3]}/>
                        <polygon points="-121,-124.55 0,-98.7 121,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(288) scale(1)">
                        <polygon points="0,68 -121,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,68 0,-235 121,-124.55" fill={c[1]}/>
                        <polygon points="-121,-124.55 0,-98.7 121,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,195 291.855,206.65" fill={c[4]}/>
                      <polygon points="256,256 291.855,206.65 314.014,237.15" fill={c[5]}/>
                      <polygon points="256,256 314.014,237.15 314.014,274.85" fill={c[6]}/>
                      <polygon points="256,256 314.014,274.85 291.855,305.35" fill={c[4]}/>
                      <polygon points="256,256 291.855,305.35 256,317" fill={c[5]}/>
                      <polygon points="256,256 256,317 220.145,305.35" fill={c[6]}/>
                      <polygon points="256,256 220.145,305.35 197.986,274.85" fill={c[4]}/>
                      <polygon points="256,256 197.986,274.85 197.986,237.15" fill={c[5]}/>
                      <polygon points="256,256 197.986,237.15 220.145,206.65" fill={c[6]}/>
                      <polygon points="256,256 220.145,206.65 256,195" fill={c[4]}/>
                    </g>
                    <g>
                      <polygon points="256,256 256,226 284.532,246.729" fill={c[5]}/>
                      <polygon points="256,256 284.532,246.729 273.634,280.271" fill={c[7]}/>
                      <polygon points="256,256 273.634,280.271 238.366,280.271" fill={c[8]}/>
                      <polygon points="256,256 238.366,280.271 227.468,246.729" fill={c[5]}/>
                      <polygon points="256,256 227.468,246.729 256,226" fill={c[7]}/>
                    </g>
        </g>
    );
}

export default ForgetMeNot;
