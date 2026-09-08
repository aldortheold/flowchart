import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    15.999995312501,
    15.999995312501,
    495.999845312548,
    495.999845312548,
]);

function Chrysanthemum({ colors }: FlowerProps) {
    const c = resolveColors("origami-chrysanthemum", colors);

    return (
        <g transform={NEW_VIEWBOX}>
                <g transform="translate(256 256)">
                      <g transform="rotate(0) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(15) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(30) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(60) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(75) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(90) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(105) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(120) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(150) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(165) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(180) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(195) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(210) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(240) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(255) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(270) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(285) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(300) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[0]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[1]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(330) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[2]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[0]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(345) scale(1)">
                        <polygon points="0,74 -24,-127.2 0,-240" fill={c[1]}/>
                        <polygon points="0,74 0,-240 24,-127.2" fill={c[2]}/>
                        <polygon points="-24,-127.2 0,-100.8 24,-127.2" fill={c[0]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(9) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(27) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(45) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(63) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(81) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(99) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(117) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(135) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(153) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(171) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(189) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(207) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(225) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(243) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(261) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(279) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(297) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(315) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[2]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[3]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[1]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(333) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[1]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[2]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(351) scale(1)">
                        <polygon points="0,58 -22,-90.63 0,-171" fill={c[3]}/>
                        <polygon points="0,58 0,-171 22,-90.63" fill={c[1]}/>
                        <polygon points="-22,-90.63 0,-71.82 22,-90.63" fill={c[2]} opacity="0.88"/>
                      </g>
                    </g>
                    <g transform="translate(256 256)">
                      <g transform="rotate(4) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(26.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[0]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(49) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[3]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(71.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(94) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[0]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(116.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[3]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(139) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(161.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[0]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(184) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[3]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(206.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(229) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[0]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(251.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[3]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(274) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(296.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[3]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[0]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[2]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(319) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[2]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[3]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[0]} opacity="0.88"/>
                      </g>
                      <g transform="rotate(341.5) scale(1)">
                        <polygon points="0,42 -20,-56.18 0,-106" fill={c[0]}/>
                        <polygon points="0,42 0,-106 20,-56.18" fill={c[2]}/>
                        <polygon points="-20,-56.18 0,-44.52 20,-56.18" fill={c[3]} opacity="0.88"/>
                      </g>
                    </g>
                    <g>
                      <polygon points="256,256 256,218 275,223.091" fill={c[3]}/>
                      <polygon points="256,256 275,223.091 288.909,237" fill={c[4]}/>
                      <polygon points="256,256 288.909,237 294,256" fill={c[1]}/>
                      <polygon points="256,256 294,256 288.909,275" fill={c[3]}/>
                      <polygon points="256,256 288.909,275 275,288.909" fill={c[4]}/>
                      <polygon points="256,256 275,288.909 256,294" fill={c[1]}/>
                      <polygon points="256,256 256,294 237,288.909" fill={c[3]}/>
                      <polygon points="256,256 237,288.909 223.091,275" fill={c[4]}/>
                      <polygon points="256,256 223.091,275 218,256" fill={c[1]}/>
                      <polygon points="256,256 218,256 223.091,237" fill={c[3]}/>
                      <polygon points="256,256 223.091,237 237,223.091" fill={c[4]}/>
                      <polygon points="256,256 237,223.091 256,218" fill={c[1]}/>
                    </g>
        </g>
    );
}

export default Chrysanthemum;
