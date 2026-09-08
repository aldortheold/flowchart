import { useId } from "react";
import { scaleFlower } from "../scaleFlower";
import { resolveColors } from "../../flowers/palettes";
import type { FlowerProps } from "../../flowers/types";

const NEW_VIEWBOX = scaleFlower([
    54.312878655378,
    23.399997455938,
    457.686722697815,
    488.599951662817,
]);

function Narcissus({ colors }: FlowerProps) {
    const petalId = useId();
    const c = resolveColors("botanical-narcissus", colors);

    return (
        <>
            <defs>
                <path id={petalId} d="M 0 68 C -42.24 52 -88 -73.92 -77.44 -136.29 C -63.36 -180.18 -17.6 -221.76 0 -231 C 17.6 -221.76 63.36 -180.18 77.44 -136.29 C 88 -73.92 42.24 52 0 68 Z"/>
              </defs>
            <g transform={NEW_VIEWBOX}>
                <g>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(0 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(60 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[3]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(120 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[4]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(180 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[0]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(240 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                      <use href={`#${petalId}`} x="256" y="256" fill={c[2]} stroke={c[1]} strokeWidth="3.2" strokeLinejoin="round" transform="rotate(300 256 256) translate(256 256) scale(1) translate(-256 -256)"/>
                    </g>
                    <g transform="translate(256 256)">
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(0) scale(1)"/>
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(60) scale(1)"/>
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(120) scale(1)"/>
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(180) scale(1)"/>
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(240) scale(1)"/>
                      <path d="M 0 -68 C 0 -86.1 0 -159.9 0 -205" fill="none" stroke={c[5]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.68" transform="rotate(300) scale(1)"/>
                    </g>
                    <path d="M 256 152 C 262.432 151.643 272.867 164.809 279.882 166.873 C 286.896 168.936 301.78 163.73 307.325 167.102 C 312.871 170.473 315.026 186.578 320.46 191.54 C 325.894 196.502 344.071 197.77 347.088 203.41 C 350.105 209.051 340.728 225.625 342.536 232.813 C 344.344 240 359.99 249.574 360.318 256 C 360.646 262.426 347.057 272.823 344.937 279.83 C 342.816 286.838 348.119 301.688 344.804 307.271 C 341.49 312.854 325.645 315.266 320.681 320.681 C 315.716 326.096 314.152 343.918 308.478 346.895 C 302.805 349.872 286.34 340.587 279.168 342.463 C 271.996 344.339 262.414 360.316 256 360.622 C 249.586 360.927 239.238 346.865 232.233 344.699 C 225.229 342.532 210.369 348.022 204.75 344.768 C 199.13 341.514 196.5 325.864 191.113 320.887 C 185.727 315.909 168.284 314.047 165.336 308.345 C 162.389 302.643 171.49 286.319 169.545 279.166 C 167.6 272.012 151.372 262.404 151.103 256 C 150.834 249.596 165.375 239.313 167.576 232.307 C 169.777 225.301 164.017 210.391 167.209 204.737 C 170.401 199.082 185.931 196.282 190.932 190.932 C 195.933 185.583 198.08 168.525 203.804 165.595 C 209.529 162.664 225.685 171.345 232.819 169.487 C 239.952 167.629 249.568 152.357 256 152 Z" fill={c[6]} stroke={c[7]} strokeWidth="4"/>
                    <path d="M 275.67 182.59 C 280.238 183.567 284.855 195.333 289.424 198.108 C 293.993 200.883 305.848 199.501 309.104 202.896 C 312.36 206.29 310.371 218.405 313.25 222.947 C 316.129 227.488 329.103 231.609 330.17 236.126 C 331.237 240.644 321.135 250.588 321.059 256 C 320.983 261.412 330.61 271.166 329.615 275.725 C 328.62 280.284 316.588 284.803 313.778 289.358 C 310.968 293.913 312.418 305.763 309.053 309.053 C 305.688 312.343 293.697 310.564 289.157 313.43 C 284.618 316.297 280.367 328.99 275.835 330.026 C 271.304 331.062 261.414 321.038 256 321.009 C 250.586 320.979 240.77 330.818 236.223 329.811 C 231.675 328.803 227.269 316.475 222.724 313.635 C 218.179 310.796 206.291 312.365 202.967 309.033 C 199.643 305.701 201.247 293.798 198.401 289.255 C 195.556 284.711 183.158 280.334 182.146 275.789 C 181.134 271.244 191.015 261.414 190.997 256 C 190.978 250.586 180.983 240.71 182.012 236.175 C 183.041 231.64 195.666 227.359 198.529 222.819 C 201.391 218.279 199.657 206.312 202.954 202.954 C 206.252 199.597 218.108 201.071 222.66 198.253 C 227.212 195.436 231.706 183.335 236.262 182.338 C 240.819 181.34 250.614 190.922 256 190.957 C 261.386 190.991 271.102 181.612 275.67 182.59 Z" fill={c[8]}/>
                    <circle cx="256" cy="256" r="52" fill={c[9]} stroke={c[10]} strokeWidth="3"/>
                    <circle cx="256" cy="216" r="5.5" fill={c[11]}/>
                    <circle cx="276" cy="221.359" r="5.5" fill={c[12]}/>
                    <circle cx="290.641" cy="236" r="5.5" fill={c[11]}/>
                    <circle cx="296" cy="256" r="5.5" fill={c[12]}/>
                    <circle cx="290.641" cy="276" r="5.5" fill={c[11]}/>
                    <circle cx="276" cy="290.641" r="5.5" fill={c[12]}/>
                    <circle cx="256" cy="296" r="5.5" fill={c[11]}/>
                    <circle cx="236" cy="290.641" r="5.5" fill={c[12]}/>
                    <circle cx="221.359" cy="276" r="5.5" fill={c[11]}/>
                    <circle cx="216" cy="256" r="5.5" fill={c[12]}/>
                    <circle cx="221.359" cy="236" r="5.5" fill={c[11]}/>
                    <circle cx="236" cy="221.359" r="5.5" fill={c[12]}/>
                    <circle cx="256" cy="256" r="18" fill={c[13]}/>
            </g>
        </>
    );
}

export default Narcissus;
