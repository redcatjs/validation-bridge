import { isString, isNumber } from 'typeable'

export default function stringLength (value, recipe = {}) {
  if (!isString(value)) return false

  if (typeof recipe !== 'object') {
    recipe = { equal: recipe }
  }
  const { equal, min, max } = recipe
  const len = value.length

  if (isNumber(equal) && !(len === equal)) return false
  if (isNumber(min) && !(len >= min)) return false
  if (isNumber(max) && !(len <= max)) return false
  return true
}
