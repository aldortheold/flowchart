import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    53.350090480043,
    22.000001828125,
    458.650020344157,
    490.000042046879,
]);

function Tulip({ colors }: FlowerProps) {
    const c = resolveColors("origami-tulip", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[0]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[1]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(60) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[2]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[3]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[0]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[1]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[2]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[3]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[0]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[1]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(300) scale(1)">
                        <polygon points="0,72 -91,-124.02 0,-234" fill={c[2]}/>
                        <polygon points="0,72 0,-234 91,-124.02" fill={c[3]}/>
                        <polygon points="-91,-124.02 0,-98.28 91,-124.02" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(30) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[0]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[2]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[3]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[0]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(150) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[2]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[3]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(210) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[0]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[2]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[3]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[0]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(330) scale(1)">
                        <polygon points="0,56 -56,-80.03 0,-151" fill={c[2]}/>
                        <polygon points="0,56 0,-151 56,-80.03" fill={c[3]}/>
                        <polygon points="-56,-80.03 0,-63.42 56,-80.03" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,201 303.631,228.5" fill={c[4]}/>
                      <polygon points="256,256 303.631,228.5 303.631,283.5" fill={c[3]}/>
                      <polygon points="256,256 303.631,283.5 256,311" fill={c[5]}/>
                      <polygon points="256,256 256,311 208.369,283.5" fill={c[4]}/>
                      <polygon points="256,256 208.369,283.5 208.369,228.5" fill={c[3]}/>
                      <polygon points="256,256 208.369,228.5 256,201" fill={c[5]}/>
                    </g>
        </g>
    );
}

export default Tulip;
