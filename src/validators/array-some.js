import { isArray } from 'typeable'
export default function arraySome (values, callback) {
  if (!isArray(values)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.some(func => func(value))
    }
  }

  return values.some((value) => {
    return callback(value)
  })
}
