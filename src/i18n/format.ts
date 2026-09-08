import type { MessageValues } from "./resources.ts"

export function interpolate(message: string, values: MessageValues = {}) {
  return message.replace(/\{(\w+)\}/g, (match, name: string) => (
    Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : match
  ))
}
