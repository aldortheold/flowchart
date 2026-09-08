import { enMessages, enPlurals } from "./locales/en.ts"
import { ruMessages, ruPlurals } from "./locales/ru.ts"

export const resources = {
  en: { messages: enMessages, plurals: enPlurals },
  ru: { messages: ruMessages, plurals: ruPlurals },
} as const

export type Locale = keyof typeof resources
export type MessageKey = keyof typeof enMessages
export type PluralKey = keyof typeof enPlurals
export type MessageValues = Record<string, string | number>

export const DEFAULT_LOCALE: Locale = "en"
export const LOCALE_KEY = "flowchart-locale"

export const LOCALES = [
  { id: "en", tag: "en-US", direction: "ltr", nativeName: "English", shortName: "EN" },
  { id: "ru", tag: "ru-RU", direction: "ltr", nativeName: "Русский", shortName: "RU" },
] as const satisfies ReadonlyArray<{
  id: Locale
  tag: string
  direction: "ltr" | "rtl"
  nativeName: string
  shortName: string
}>

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && value in resources
}

export function localeFromLanguageTag(value: string | null | undefined): Locale | null {
  if (!value) return null
  const language = value.trim().toLowerCase().split(/[-_]/, 1)[0]
  return isLocale(language) ? language : null
}

export function resolveLocale(saved: string | null, languages: readonly string[]): Locale {
  const stored = localeFromLanguageTag(saved)
  if (stored) return stored

  for (const language of languages) {
    const supported = localeFromLanguageTag(language)
    if (supported) return supported
  }

  return DEFAULT_LOCALE
}

export function localeTag(locale: Locale) {
  return LOCALES.find((item) => item.id === locale)?.tag ?? LOCALES[0].tag
}

export function localeDirection(locale: Locale) {
  return LOCALES.find((item) => item.id === locale)?.direction ?? LOCALES[0].direction
}
