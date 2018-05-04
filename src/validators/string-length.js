import { isString, isNumber } from 'typeable'

export default function stringLength (value, recipe = {}) {
  if (!isString(value)) return false

  const { bytes = false, min, minOrEqual, max, maxOrEqual } = recipe
  const len = bytes
    ? encodeURI(value).split(/%..|./).length - 1
    : value.length

  if (isNumber(min) && !(len > min)) return false
  if (isNumber(minOrEqual) && !(len >= minOrEqual)) return false
  if (isNumber(max) && !(len < max)) return false
  if (isNumber(maxOrEqual) && !(len <= maxOrEqual)) return false
  return true
}
