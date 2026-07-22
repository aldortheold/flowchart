import { useId } from "react";

function Daisy() {

    const petalId = useId();

    return (
        <>
            <defs>
                <path id={petalId} d="M256 229 C224 192 226 120 256 72 C286 120 288 192 256 229 Z" />
            </defs>
            <g>
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(0 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(45 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(90 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(135 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(180 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(225 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(270 256 256)" />
                <use href={`#${petalId}`} fill="#fff3cf" transform="rotate(315 256 256)" />
                <circle cx="256" cy="256" r="78" fill="#e7a52e" />
                <circle cx="238" cy="232" r="30" fill="#f6ca50" />
            </g>
        </>
    );
}

export default Daisy;
