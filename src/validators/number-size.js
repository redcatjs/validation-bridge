import { isNumber } from 'typeable'

export default function numberSize (value, options = {}) {
  if (!isNumber(value)) return false

  const {min, minOrEqual, max, maxOrEqual} = options
  if (isNumber(min) && !(value > min)) return false
  if (isNumber(minOrEqual) && !(value >= minOrEqual)) return false
  if (isNumber(max) && !(value < max)) return false
  if (isNumber(maxOrEqual) && !(value <= maxOrEqual)) return false
  return true
}
