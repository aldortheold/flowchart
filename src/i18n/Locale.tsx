import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { I18nCtx } from "./context"
import { interpolate } from "./format"
import {
  DEFAULT_LOCALE,
  LOCALE_KEY,
  localeDirection,
  localeTag,
  resolveLocale,
  resources,
  type Locale,
  type MessageValues,
} from "./resources"

type LocaleProviderProps = {
  children: ReactNode
}

function initialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE

  let saved: string | null = null
  try {
    saved = window.localStorage.getItem(LOCALE_KEY)
  } catch {
    // Browser language detection still provides a stable fallback.
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return resolveLocale(saved, languages)
}

function applyLocale(locale: Locale) {
  const root = document.documentElement
  root.lang = locale
  root.dir = localeDirection(locale)
  root.dataset.locale = locale
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const tag = localeTag(locale)

  useLayoutEffect(() => {
    applyLocale(locale)

    try {
      window.localStorage.setItem(LOCALE_KEY, locale)
    } catch {
      // The preference remains available for the current session.
    }
  }, [locale])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== LOCALE_KEY) return
      const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
      setLocale(resolveLocale(event.newValue, languages))
    }

    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const t = useCallback((key: keyof typeof resources.en.messages, values?: MessageValues) => (
    interpolate(resources[locale].messages[key], values)
  ), [locale])

  const pluralRules = useMemo(() => new Intl.PluralRules(tag), [tag])
  const tp = useCallback((key: keyof typeof resources.en.plurals, count: number, values?: MessageValues) => {
    const forms = resources[locale].plurals[key] as Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }
    const message = forms[pluralRules.select(count)] ?? forms.other
    return interpolate(message, { count, ...values })
  }, [locale, pluralRules])

  const numberFormatter = useCallback((value: number, options?: Intl.NumberFormatOptions) => (
    new Intl.NumberFormat(tag, options).format(value)
  ), [tag])

  const dateFormatter = useCallback((value: Date | number, options?: Intl.DateTimeFormatOptions) => (
    new Intl.DateTimeFormat(tag, options).format(value)
  ), [tag])

  const listFormatter = useCallback((values: Iterable<string>, options?: Intl.ListFormatOptions) => (
    new Intl.ListFormat(tag, options).format(values)
  ), [tag])

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
    tp,
    number: numberFormatter,
    date: dateFormatter,
    list: listFormatter,
  }), [dateFormatter, listFormatter, locale, numberFormatter, t, tp])

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}
