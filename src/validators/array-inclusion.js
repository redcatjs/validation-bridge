import { isArray } from 'typeable'

export default function arrayInclusion (value, options = {}) {
  let { values } = options

  if (!isArray(values)){
    return false
  }

  return values.indexOf(value) !== -1
}
