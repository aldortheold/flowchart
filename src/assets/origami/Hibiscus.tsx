import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    32.501687587631,
    20.999994187828,
    479.498514957806,
    446.11887386673,
]);

function Hibiscus({ colors }: FlowerProps) {
    const c = resolveColors("origami-hibiscus", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,69 -120,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,69 0,-235 120,-124.55" fill={c[1]}/>
                        <polygon points="-120,-124.55 0,-98.7 120,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(72) scale(1)">
                        <polygon points="0,69 -120,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,69 0,-235 120,-124.55" fill={c[3]}/>
                        <polygon points="-120,-124.55 0,-98.7 120,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(144) scale(1)">
                        <polygon points="0,69 -120,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,69 0,-235 120,-124.55" fill={c[1]}/>
                        <polygon points="-120,-124.55 0,-98.7 120,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(216) scale(1)">
                        <polygon points="0,69 -120,-124.55 0,-235" fill={c[2]}/>
                        <polygon points="0,69 0,-235 120,-124.55" fill={c[3]}/>
                        <polygon points="-120,-124.55 0,-98.7 120,-124.55" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(288) scale(1)">
                        <polygon points="0,69 -120,-124.55 0,-235" fill={c[0]}/>
                        <polygon points="0,69 0,-235 120,-124.55" fill={c[1]}/>
                        <polygon points="-120,-124.55 0,-98.7 120,-124.55" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,170 306.55,186.425" fill={c[3]}/>
                      <polygon points="256,256 306.55,186.425 337.791,229.425" fill={c[2]}/>
                      <polygon points="256,256 337.791,229.425 337.791,282.575" fill={c[4]}/>
                      <polygon points="256,256 337.791,282.575 306.55,325.575" fill={c[3]}/>
                      <polygon points="256,256 306.55,325.575 256,342" fill={c[2]}/>
                      <polygon points="256,256 256,342 205.45,325.575" fill={c[4]}/>
                      <polygon points="256,256 205.45,325.575 174.209,282.575" fill={c[3]}/>
                      <polygon points="256,256 174.209,282.575 174.209,229.425" fill={c[2]}/>
                      <polygon points="256,256 174.209,229.425 205.45,186.425" fill={c[4]}/>
                      <polygon points="256,256 205.45,186.425 256,170" fill={c[3]}/>
                    </g>
                    <polygon points="256,218 292.14,244.257 278.336,286.743 233.664,286.743 219.86,244.257" fill={c[4]}/>
        </g>
    );
}

export default Hibiscus;
