import isObject from './is-object'
export default function objectSomeKey (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.some(func => func(value))
    }
  }

  return Object.keys(object).some((key) => {
    return callback(key)
  })
}
