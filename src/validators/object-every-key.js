import isObject from './is-object'
export default function objectEveryKey (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.every(func => func(value))
    }
  }

  return Object.keys(object).every((key) => {
    return callback(key)
  })
}
