import type { ReactNode, SVGProps } from "react"

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "undo"
  | "redo"
  | "trash"
  | "download"
  | "upload"
  | "copy"
  | "duplicate"
  | "plus"
  | "minus"
  | "close"
  | "check"
  | "menu"
  | "more"
  | "flower"
  | "palette"
  | "image"
  | "layers"
  | "frame"
  | "ratio"
  | "grid"
  | "move"
  | "rotate"
  | "flip-h"
  | "flip-v"
  | "lock"
  | "unlock"
  | "eye"
  | "eye-off"
  | "zoom-in"
  | "zoom-out"
  | "fit"
  | "reset"
  | "settings"
  | "info"
  | "warning"
  | "sparkle"
  | "sun"
  | "moon"
  | "system"
  | "language"
  | "home"
  | "edit"
  | "save"
  | "align-left"
  | "align-center"
  | "align-right"
  | "bring-forward"
  | "send-back"
  | "grip"
  | "link"
  | "unlink"
  | "crop"
  | "file-image"
  | "file-code"

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName
  size?: number | string
  label?: string
}

const art: Record<IconName, ReactNode> = {
  "arrow-right": <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  "arrow-left": <><path d="M19 12H5"/><path d="m10 7-5 5 5 5"/></>,
  "chevron-down": <path d="m7 9 5 5 5-5"/>,
  "chevron-up": <path d="m7 15 5-5 5 5"/>,
  "chevron-left": <path d="m14.5 7-5 5 5 5"/>,
  "chevron-right": <path d="m9.5 7 5 5-5 5"/>,
  undo: <><path d="M9 8H4V3"/><path d="M4.7 7.4A8 8 0 1 1 4.9 17"/></>,
  redo: <><path d="M15 8h5V3"/><path d="M19.3 7.4a8 8 0 1 0-.2 9.6"/></>,
  trash: <><path d="M4 7h16"/><path d="m9 7 .7-3h4.6l.7 3"/><path d="m6.5 7 .8 13h9.4l.8-13"/><path d="M10 11v5M14 11v5"/></>,
  download: <><path d="M12 3v12"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4 19h16"/></>,
  upload: <><path d="M12 16V4"/><path d="m7.5 8.5 4.5-4.5 4.5 4.5"/><path d="M4 20h16"/></>,
  copy: <><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
  duplicate: <><rect x="7" y="7" width="12" height="12" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2"/><path d="M13 10v6M10 13h6"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  minus: <path d="M5 12h14"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/></>,
  flower: <><path d="M12 11c-3.7-1.1-4.8-5.4-2.2-7.4 2-1.5 4.5.4 4.2 3.5C15.8 4.5 19 4.4 20 6.6c1.1 2.5-1.8 5.2-5.2 4.5 3.1 1.5 3.3 5.5.8 6.8-2.4 1.3-4.7-1.7-3.4-4.8-2.3 2.6-6.1 1.5-6.2-1.2-.1-2.4 3.2-3.7 6-1Z"/><circle cx="12.2" cy="10.8" r="2.2"/></>,
  palette: <><path d="M12 3a9 9 0 0 0 0 18h1.2a2 2 0 0 0 1.4-3.4 1.7 1.7 0 0 1 1.2-2.9H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r=".8" fill="currentColor" stroke="none"/><circle cx="9.5" cy="6.7" r=".8" fill="currentColor" stroke="none"/><circle cx="14" cy="6.4" r=".8" fill="currentColor" stroke="none"/><circle cx="17" cy="9" r=".8" fill="currentColor" stroke="none"/></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-5 3.5 3 2.5-2 5 4"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  frame: <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>,
  ratio: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 5v14M8 12h13"/></>,
  grid: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></>,
  move: <><path d="M12 3v18M3 12h18"/><path d="m8.5 6.5 3.5-3.5 3.5 3.5M8.5 17.5 12 21l3.5-3.5M6.5 8.5 3 12l3.5 3.5M17.5 8.5 21 12l-3.5 3.5"/></>,
  rotate: <><path d="M20 7v5h-5"/><path d="M19.1 12A7.5 7.5 0 1 1 17 6.3L20 9"/></>,
  "flip-h": <><path d="M12 3v18" strokeDasharray="2.2 2.2"/><path d="m9 6-6 6 6 6V6ZM15 6l6 6-6 6V6Z"/></>,
  "flip-v": <><path d="M3 12h18" strokeDasharray="2.2 2.2"/><path d="m6 9 6-6 6 6H6ZM6 15l6 6 6-6H6Z"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
  unlock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.4-2.1M12 14v3"/></>,
  eye: <><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
  "eye-off": <><path d="m3 3 18 18"/><path d="M10.6 6.1Q11.3 6 12 6c6.2 0 9.5 6 9.5 6a14.4 14.4 0 0 1-3.1 3.8M6.1 6.2A14.5 14.5 0 0 0 2.5 12s3.3 6 9.5 6c.9 0 1.7-.1 2.5-.3"/></>,
  "zoom-in": <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 7.5v6M7.5 10.5h6"/></>,
  "zoom-out": <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M7.5 10.5h6"/></>,
  fit: <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>,
  reset: <><path d="M4 4v6h6"/><path d="M5.2 9.5A8 8 0 1 1 5 16"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
  warning: <><path d="M10.3 4.1 2.7 18a2 2 0 0 0 1.8 3h15a2 2 0 0 0 1.8-3L13.7 4.1a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
  sparkle: <><path d="M12 3c.7 4.3 2.7 6.3 7 7-4.3.7-6.3 2.7-7 7-.7-4.3-2.7-6.3-7-7 4.3-.7 6.3-2.7 7-7Z"/><path d="M19 16c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3Z"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  moon: <path d="M20 15.1A8.5 8.5 0 0 1 8.9 4a8.5 8.5 0 1 0 11.1 11.1Z"/>,
  system: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M16 8a4 4 0 0 1-4 5 4 4 0 0 1-2.8-6.8A4 4 0 0 0 16 8Z"/></>,
  language: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/></>,
  edit: <><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></>,
  save: <><path d="M4 3h13l3 3v15H4V3Z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/></>,
  "align-left": <path d="M4 4v16M8 7h11M8 12h8M8 17h11"/>,
  "align-center": <path d="M12 3v18M5 7h14M7 12h10M5 17h14"/>,
  "align-right": <path d="M20 4v16M5 7h11M8 12h8M5 17h11"/>,
  "bring-forward": <><rect x="5" y="8" width="11" height="11" rx="2"/><path d="M8 8V5h11v11h-3"/></>,
  "send-back": <><rect x="8" y="5" width="11" height="11" rx="2"/><path d="M8 8H5v11h11v-3"/></>,
  grip: <><circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/></>,
  link: <><path d="m10 13.5 4-3"/><path d="M7.5 16.5 5 19a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 7.5 19 5a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0" transform="translate(-2.5)"/></>,
  unlink: <><path d="m8 12 8 0M3 3l18 18"/><path d="m7 17-2 2a3.5 3.5 0 0 1-5-5l3-3M17 7l2-2a3.5 3.5 0 0 1 5 5l-3 3" transform="translate(-2.5)"/></>,
  crop: <><path d="M6 2v16a2 2 0 0 0 2 2h14M2 6h16a2 2 0 0 1 2 2v14"/></>,
  "file-image": <><path d="M6 2h8l5 5v15H6V2Z"/><path d="M14 2v5h5M9 17l2.5-3 2 2 1.5-1.5 2 2.5M10 10h.01"/></>,
  "file-code": <><path d="M6 2h8l5 5v15H6V2Z"/><path d="M14 2v5h5M11 12l-2 2 2 2M15 12l2 2-2 2"/></>,
}

export function Icon({
  name,
  size = "1em",
  label,
  className = "",
  strokeWidth = 1.8,
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {art[name]}
    </svg>
  )
}
