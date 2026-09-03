const VIEW_BOX_SIZE = 512;

type PaintedBounds = readonly [
    left: number,
    top: number,
    right: number,
    bottom: number,
];

export function scaleFlower([left, top, right, bottom]: PaintedBounds) {
    const scaleX = VIEW_BOX_SIZE / (right - left);
    const scaleY = VIEW_BOX_SIZE / (bottom - top);

    return `matrix(${scaleX} 0 0 ${scaleY} ${-left * scaleX} ${-top * scaleY})`;
}
