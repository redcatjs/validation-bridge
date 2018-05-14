import { isArray } from 'typeable'

export default function arrayEveryIn (values, whitelist) {
  if (!isArray(values)) return false
  return values.every(function (value) {
    return whitelist.includes(value)
  })
}
