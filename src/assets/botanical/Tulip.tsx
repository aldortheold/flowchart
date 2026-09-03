import { useId } from "react";
import { scaleFlower } from "../scaleFlower";

// Includes the outer petals' four-unit stroke.
const NEW_VIEWBOX = scaleFlower([
    77.330817628,
    50,
    434.669182372,
    462,
]);

function Tulip() {

    const outerPetalId = useId();
    const innerPetalId = useId();
    const petalRibId = useId();

    return (
        <>
            <defs>
                <path id={outerPetalId} d="M256 268 C211 221 211 126 256 52 C301 126 301 221 256 268 Z"/>
                <path id={innerPetalId} d="M256 276 C227 238 230 166 256 111 C284 166 283 238 256 276 Z"/>
                <path id={petalRibId} d="M256 244 C248 188 251 116 256 70"/>
            </defs>
            <g transform={NEW_VIEWBOX}>
                <g stroke="#a82d4c" strokeWidth="4" strokeLinejoin="round">
                    <use href={`#${outerPetalId}`} fill="#ef5a67" transform="rotate(0 256 256)"/>
                    <use href={`#${outerPetalId}`} fill="#cf3858" transform="rotate(60 256 256)"/>
                    <use href={`#${outerPetalId}`} fill="#e94e62" transform="rotate(120 256 256)"/>
                    <use href={`#${outerPetalId}`} fill="#c83252" transform="rotate(180 256 256)"/>
                    <use href={`#${outerPetalId}`} fill="#ed5867" transform="rotate(240 256 256)"/>
                    <use href={`#${outerPetalId}`} fill="#d43b59" transform="rotate(300 256 256)"/>
                </g>
                <g fill="none" stroke="#ff9b91" strokeWidth="6" strokeLinecap="round" opacity="0.72">
                    <use href={`#${petalRibId}`} transform="rotate(0 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(60 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(120 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(180 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(240 256 256)"/>
                    <use href={`#${petalRibId}`} transform="rotate(300 256 256)"/>
                </g>
                <g stroke="#9d2747" strokeWidth="3" strokeLinejoin="round">
                    <use href={`#${innerPetalId}`} fill="#ff7b75" transform="rotate(30 256 256)"/>
                    <use href={`#${innerPetalId}`} fill="#e64a60" transform="rotate(90 256 256)"/>
                    <use href={`#${innerPetalId}`} fill="#f66a6d" transform="rotate(150 256 256)"/>
                    <use href={`#${innerPetalId}`} fill="#d63a58" transform="rotate(210 256 256)"/>
                    <use href={`#${innerPetalId}`} fill="#fa716f" transform="rotate(270 256 256)"/>
                    <use href={`#${innerPetalId}`} fill="#df425c" transform="rotate(330 256 256)"/>
                </g>
                <circle cx="256" cy="256" r="56" fill="#8e2241"/>
                <circle cx="256" cy="256" r="32" fill="#5f1934"/>
                <g fill="#f2b83d">
                    <ellipse cx="256" cy="219" rx="8" ry="15"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(60 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(120 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(180 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(240 256 256)"/>
                    <ellipse cx="256" cy="219" rx="8" ry="15" transform="rotate(300 256 256)"/>
                </g>
                <circle cx="256" cy="256" r="13" fill="#f6d064"/>
            </g>
        </>
    );
}

export default Tulip;
