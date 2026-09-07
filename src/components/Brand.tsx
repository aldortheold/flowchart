import { useId, type HTMLAttributes, type SVGProps } from "react"

type MarkProps = SVGProps<SVGSVGElement> & {
  title?: string
}

type BrandProps = HTMLAttributes<HTMLSpanElement> & {
  markOnly?: boolean
}

export function Mark({ title, className = "", ...props }: MarkProps) {
  const id = useId()

  return (
    <svg
      {...props}
      className={`brand-mark ${className}`.trim()}
      viewBox="0 0 48 48"
      role={title ? "img" : undefined}
      aria-labelledby={title ? id : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title id={id}>{title}</title>}
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#ed7187" />
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#ef956f" transform="rotate(60 24 24)" />
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#e9b951" transform="rotate(120 24 24)" />
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#78b486" transform="rotate(180 24 24)" />
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#6da8bb" transform="rotate(240 24 24)" />
      <path d="M24 3.5c5.8 4.8 7.3 12 0 19-7.3-7-5.8-14.2 0-19Z" fill="#9c8bc4" transform="rotate(300 24 24)" />
      <circle cx="24" cy="24" r="8.4" fill="#fbfaf5" />
      <circle cx="24" cy="24" r="4.2" fill="#26372f" />
    </svg>
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
