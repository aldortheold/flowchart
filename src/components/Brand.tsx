import type { HTMLAttributes, ImgHTMLAttributes } from "react"

type MarkProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src"> & {
  title?: string
}

type BrandProps = HTMLAttributes<HTMLSpanElement> & {
  markOnly?: boolean
}

export function Mark({ title, className = "", ...props }: MarkProps) {
  return (
    <img
      {...props}
      className={`brand-mark ${className}`.trim()}
      src="/updated-logo.svg"
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
    />
  )
}

export function Brand({ markOnly = false, className = "", ...props }: BrandProps) {
  return (
    <span {...props} className={`brand ${className}`.trim()}>
      <Mark />
      {!markOnly && <span className="brand-word">Flowchart</span>}
      {markOnly && <span className="sr-only">Flowchart</span>}
    </span>
  )
}

export default Brand
