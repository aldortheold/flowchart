import type { ButtonHTMLAttributes } from "react"
import { Icon } from "../components/Icons"
import { useTheme } from "./context"

type ThemeToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">

export function ThemeToggle({ className = "", ...props }: ThemeToggleProps) {
  const { mode, theme, toggle } = useTheme()
  const next = theme === "dark" ? "light" : "dark"
  const label = `Theme: ${mode}${mode === "system" ? ` (${theme})` : ""}. Use ${next} theme`

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
