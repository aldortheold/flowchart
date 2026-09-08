import type { ButtonHTMLAttributes } from "react"
import { Icon } from "../components/Icons"
import { useI18n } from "../i18n"
import { useTheme } from "./context"

type ThemeToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">

export function ThemeToggle({ className = "", ...props }: ThemeToggleProps) {
  const { mode, theme, toggle } = useTheme()
  const { t } = useI18n()
  const label = t(mode === "system"
    ? theme === "dark" ? "theme.toggle.systemDark" : "theme.toggle.systemLight"
    : theme === "dark" ? "theme.toggle.dark" : "theme.toggle.light")

  return (
    <button
      {...props}
      type="button"
      className={`theme-toggle ${className}`.trim()}
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
      onClick={toggle}
    >
      <Icon name={mode === "system" ? "system" : theme === "dark" ? "moon" : "sun"} />
    </button>
  )
}
