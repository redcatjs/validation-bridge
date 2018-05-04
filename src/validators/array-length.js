import { isArray, isNumber } from 'typeable'

export default function arrayLength (value, options = {}) {
  if (!isArray(value)) return false

  const size = value.length
  const { min, minOrEqual, max, maxOrEqual } = options
  if (isNumber(min) && !(size > min)) return false
  if (isNumber(minOrEqual) && !(size >= minOrEqual)) return false
  if (isNumber(max) && !(size < max)) return false
  if (isNumber(maxOrEqual) && !(size <= maxOrEqual)) return false
  return true
}
