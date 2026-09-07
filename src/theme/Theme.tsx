import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { THEME_KEY, ThemeCtx, type Theme, type ThemeMode } from "./context"

type ThemeProviderProps = {
  children: ReactNode
}

const modes: ThemeMode[] = ["light", "dark", "system"]

function getMode(): ThemeMode {
  if (typeof window === "undefined") return "system"

  try {
    const mode = window.localStorage.getItem(THEME_KEY) as ThemeMode | null
    return mode && modes.includes(mode) ? mode : "system"
  } catch {
    return "system"
  }
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(mode: ThemeMode, theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.dataset.themeMode = mode
  root.style.colorScheme = theme

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#111713" : "#f6f5ef")
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(getMode)
  const [system, setSystem] = useState<Theme>(getSystemTheme)
  const theme = mode === "system" ? system : mode

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (event: MediaQueryListEvent) => {
      setSystem(event.matches ? "dark" : "light")
    }

    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    applyTheme(mode, theme)

    try {
      window.localStorage.setItem(THEME_KEY, mode)
    } catch {
      // Storage can be unavailable in private or locked-down browser contexts.
    }
  }, [mode, theme])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_KEY) setMode(getMode())
    }

    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const toggle = useCallback(() => {
    setMode((current) => {
      const resolved = current === "system" ? getSystemTheme() : current
      return resolved === "dark" ? "light" : "dark"
    })
  }, [])

  const value = useMemo(
    () => ({ mode, theme, setMode, toggle }),
    [mode, theme, toggle],
  )

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}
