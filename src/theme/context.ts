import { createContext, useContext } from "react"

export type Theme = "light" | "dark"
export type ThemeMode = Theme | "system"

export type ThemeValue = {
  mode: ThemeMode
  theme: Theme
  setMode: (mode: ThemeMode) => void
  toggle: () => void
}

export const THEME_KEY = "flowchart-theme"
export const ThemeCtx = createContext<ThemeValue | null>(null)

export function useTheme() {
  const value = useContext(ThemeCtx)
  if (!value) throw new Error("useTheme must be used inside ThemeProvider")
  return value
}
