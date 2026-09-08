import { createContext, useContext } from "react"
import type { Locale, MessageKey, MessageValues, PluralKey } from "./resources"

export type Translate = (key: MessageKey, values?: MessageValues) => string
export type TranslatePlural = (key: PluralKey, count: number, values?: MessageValues) => string

export type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translate
  tp: TranslatePlural
  number: (value: number, options?: Intl.NumberFormatOptions) => string
  date: (value: Date | number, options?: Intl.DateTimeFormatOptions) => string
  list: (values: Iterable<string>, options?: Intl.ListFormatOptions) => string
}

export const I18nCtx = createContext<I18nValue | null>(null)

export function useI18n() {
  const value = useContext(I18nCtx)
  if (!value) throw new Error("useI18n must be used inside LocaleProvider")
  return value
}
