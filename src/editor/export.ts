import type { Doc } from "./types"

export type ExportType = "jpg" | "png" | "svg"
export type ExportErrorCode = "prepare" | "image" | "canvas"

export class ExportFailure extends Error {
    readonly code: ExportErrorCode

    constructor(code: ExportErrorCode) {
        super(`export:${code}`)
        this.name = "ExportFailure"
        this.code = code
    }
}

function stamp(now = new Date()) {
    const part = (n: number) => String(n).padStart(2, "0")
    return `${now.getFullYear()}-${part(now.getMonth() + 1)}-${part(now.getDate())}-${part(now.getHours())}${part(now.getMinutes())}`
}

export function fileName(type: ExportType, now?: Date) {
    return `flowchart-${stamp(now)}.${type}`
}

export function serialize(svg: SVGSVGElement, doc: Doc) {
    const copy = svg.cloneNode(true) as SVGSVGElement
    copy.querySelectorAll("[data-export-ignore]").forEach((node) => node.remove())
    copy.querySelectorAll("[data-flower-id]").forEach((node) => {
        node.removeAttribute("data-flower-id")
        node.removeAttribute("aria-label")
        node.removeAttribute("class")
    })
    copy.removeAttribute("class")
    copy.removeAttribute("role")
    copy.removeAttribute("aria-label")
    copy.removeAttribute("tabindex")
    copy.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    copy.setAttribute("width", String(doc.canvas.w))
    copy.setAttribute("height", String(doc.canvas.h))
    copy.setAttribute("viewBox", `0 0 ${doc.canvas.w} ${doc.canvas.h}`)
    copy.setAttribute("preserveAspectRatio", "xMidYMid meet")
    return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(copy)}`
}

function save(blob: Blob, name: string) {
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = name
    link.rel = "noopener"
    document.body.append(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1200)
}

function loadImage(url: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => reject(new ExportFailure("prepare"))
        img.src = url
    })
}

function canvasBlob(canvas: HTMLCanvasElement, type: string, quality?: number) {
    return new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) resolve(blob)
            else reject(new ExportFailure("image"))
        }, type, quality)
    })
}

export async function exportArt(svg: SVGSVGElement, doc: Doc, type: ExportType, matte = "#f7f3ea") {
    const source = serialize(svg, doc)

    if (type === "svg") {
        save(new Blob([source], { type: "image/svg+xml;charset=utf-8" }), fileName(type))
        return
    }

    const src = URL.createObjectURL(new Blob([source], { type: "image/svg+xml;charset=utf-8" }))

    try {
        const img = await loadImage(src)
        const canvas = document.createElement("canvas")
        canvas.width = doc.canvas.w
        canvas.height = doc.canvas.h
        const ctx = canvas.getContext("2d")
        if (!ctx) throw new ExportFailure("canvas")

        if (type === "jpg") {
            ctx.fillStyle = matte
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const mime = type === "png" ? "image/png" : "image/jpeg"
        const blob = await canvasBlob(canvas, mime, type === "jpg" ? 0.92 : undefined)
        save(blob, fileName(type))
    } finally {
        URL.revokeObjectURL(src)
    }
}
