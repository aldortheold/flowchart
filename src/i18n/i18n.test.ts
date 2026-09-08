/// <reference types="node" />

import assert from "node:assert/strict"
import test from "node:test"
import { interpolate } from "./format.ts"
import { localeTag, resolveLocale, resources, type Locale, type PluralKey } from "./resources.ts"

function plural(locale: Locale, key: PluralKey, count: number) {
  const forms = resources[locale].plurals[key] as Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }
  const form = new Intl.PluralRules(localeTag(locale)).select(count)
  return interpolate(forms[form] ?? forms.other, {
    count: new Intl.NumberFormat(localeTag(locale)).format(count),
  })
}

test("locale resources keep identical message and plural keys", () => {
  assert.deepEqual(Object.keys(resources.ru.messages).sort(), Object.keys(resources.en.messages).sort())
  assert.deepEqual(Object.keys(resources.ru.plurals).sort(), Object.keys(resources.en.plurals).sort())
})

test("saved locale wins, browser locales use their base language, and unsupported locales fall back to English", () => {
  assert.equal(resolveLocale("en", ["ru-RU"]), "en")
  assert.equal(resolveLocale(null, ["de-DE", "ru-RU"]), "ru")
  assert.equal(resolveLocale(null, ["en-GB"]), "en")
  assert.equal(resolveLocale(null, ["de-DE", "fr-FR"]), "en")
})

test("messages interpolate dynamic values without changing unknown placeholders", () => {
  assert.equal(interpolate("Exporting {format} at {width}px", { format: "PNG", width: 1600 }), "Exporting PNG at 1600px")
  assert.equal(interpolate("Keep {unknown}"), "Keep {unknown}")
})

test("English and Russian flower plurals follow locale rules", () => {
  assert.equal(plural("en", "flower.count", 1), "1 flower")
  assert.equal(plural("en", "flower.count", 2), "2 flowers")
  assert.equal(plural("ru", "flower.count", 1), "1 цветок")
  assert.equal(plural("ru", "flower.count", 2), "2 цветка")
  assert.equal(plural("ru", "flower.count", 5), "5 цветов")
  assert.equal(plural("ru", "flower.count", 21), "21 цветок")
})

test("number formatting uses each locale's conventions", () => {
  const value = 16_777_216
  assert.equal(new Intl.NumberFormat(localeTag("en")).format(value), "16,777,216")
  assert.match(new Intl.NumberFormat(localeTag("ru")).format(value), /^16\D777\D216$/)
})
