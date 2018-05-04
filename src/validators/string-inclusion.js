import { isString, toString } from 'typeable'

export default function stringInclusion (value, options = {}) {
  if (!isString(value)) return false

  const {seed} = options
  return value.indexOf(toString(seed)) >= 0
}
