import { isArray } from 'typeable'
export default function arrayEvery (values, callback) {
  if (!isArray(values)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.every(func => func(value))
    }
  }

  return values.every((value) => {
    return callback(value)
  })
}
