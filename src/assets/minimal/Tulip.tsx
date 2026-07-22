import { useId } from "react";

function Tulip() {

    const petalId = useId();

    return (
        <>
            <defs>
                <path id={petalId} d="M256 278 C213 225 216 125 256 60 C296 125 299 225 256 278 Z" />
            </defs>
            <g>
                <use href={`#${petalId}`} fill="#ff7d76" transform="rotate(0 256 256)" />
                <use href={`#${petalId}`} fill="#e94d61" transform="rotate(60 256 256)" />
                <use href={`#${petalId}`} fill="#d43757" transform="rotate(120 256 256)" />
                <use href={`#${petalId}`} fill="#c92f51" transform="rotate(180 256 256)" />
                <use href={`#${petalId}`} fill="#e7475d" transform="rotate(240 256 256)" />
                <use href={`#${petalId}`} fill="#f26269" transform="rotate(300 256 256)" />
                <circle cx="256" cy="256" r="59" fill="#9f2748" />
                <circle cx="256" cy="256" r="26" fill="#f5b949" />
            </g>
        </>
    );
}

export default Tulip;