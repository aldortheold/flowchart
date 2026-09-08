import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { Icon } from "../components/Icons"
import { useI18n } from "./context"
import { LOCALES, type Locale } from "./resources"

type LanguageSelectorProps = {
  className?: string
}

export function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      buttonRef.current?.focus()
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  function choose(next: Locale) {
    setLocale(next)
    setOpen(false)
    buttonRef.current?.focus()
  }

  function menuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const items = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='menuitemradio']"))
    const index = items.indexOf(document.activeElement as HTMLButtonElement)
    let next = index
    if (event.key === "ArrowDown") next = (index + 1) % items.length
    else if (event.key === "ArrowUp") next = (index - 1 + items.length) % items.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = items.length - 1
    else return
    event.preventDefault()
    items[next]?.focus()
  }

  return (
    <div ref={rootRef} className={`language-selector ${className}`.trim()}>
      <button
        ref={buttonRef}
        type="button"
        className="language-trigger"
        aria-label={`${t("language.label")}: ${current.nativeName}`}
        title={`${t("language.label")}: ${current.nativeName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown") return
          event.preventDefault()
          setOpen(true)
          window.setTimeout(() => rootRef.current?.querySelector<HTMLButtonElement>("[role='menuitemradio']")?.focus(), 0)
        }}
      >
        <Icon name="language" />
        <span>{current.shortName}</span>
        <Icon name="chevron-down" />
      </button>
      {open && (
        <div id={menuId} className="language-menu" role="menu" aria-label={t("language.menuLabel")} onKeyDown={menuKeyDown}>
          <span className="language-menu-title">{t("language.label")}</span>
          {LOCALES.map((item) => (
            <button
              type="button"
              key={item.id}
              role="menuitemradio"
              aria-checked={locale === item.id}
              className={locale === item.id ? "is-active" : ""}
              onClick={() => choose(item.id)}
            >
              <span>{item.nativeName}</span>
              <small>{item.shortName}</small>
              <Icon name="check" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
