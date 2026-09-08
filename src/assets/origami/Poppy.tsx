import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    22.000001828125,
    22.000001828125,
    490.000042046879,
    490.000042046879,
]);

function Poppy({ colors }: FlowerProps) {
    const c = resolveColors("origami-poppy", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,72 -145,-124.02 0,-234" fill={c[0]}/>
                        <polygon points="0,72 0,-234 145,-124.02" fill={c[1]}/>
                        <polygon points="-145,-124.02 0,-98.28 145,-124.02" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,72 -145,-124.02 0,-234" fill={c[2]}/>
                        <polygon points="0,72 0,-234 145,-124.02" fill={c[3]}/>
                        <polygon points="-145,-124.02 0,-98.28 145,-124.02" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,72 -145,-124.02 0,-234" fill={c[0]}/>
                        <polygon points="0,72 0,-234 145,-124.02" fill={c[1]}/>
                        <polygon points="-145,-124.02 0,-98.28 145,-124.02" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,72 -145,-124.02 0,-234" fill={c[2]}/>
                        <polygon points="0,72 0,-234 145,-124.02" fill={c[3]}/>
                        <polygon points="-145,-124.02 0,-98.28 145,-124.02" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,180 294,190.182" fill={c[4]}/>
                      <polygon points="256,256 294,190.182 321.818,218" fill={c[5]}/>
                      <polygon points="256,256 321.818,218 332,256" fill={c[6]}/>
                      <polygon points="256,256 332,256 321.818,294" fill={c[4]}/>
                      <polygon points="256,256 321.818,294 294,321.818" fill={c[5]}/>
                      <polygon points="256,256 294,321.818 256,332" fill={c[6]}/>
                      <polygon points="256,256 256,332 218,321.818" fill={c[4]}/>
                      <polygon points="256,256 218,321.818 190.182,294" fill={c[5]}/>
                      <polygon points="256,256 190.182,294 180,256" fill={c[6]}/>
                      <polygon points="256,256 180,256 190.182,218" fill={c[4]}/>
                      <polygon points="256,256 190.182,218 218,190.182" fill={c[5]}/>
                      <polygon points="256,256 218,190.182 256,180" fill={c[6]}/>
                    </g>
                    <polygon points="256,216 284.284,227.716 296,256 284.284,284.284 256,296 227.716,284.284 216,256 227.716,227.716" fill={c[6]}/>
        </g>
    );
}

export default Poppy;
