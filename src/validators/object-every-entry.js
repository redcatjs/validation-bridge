import isObject from './is-object'
export default function objectEveryEntry (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.every(func => func(value))
    }
  }

  return Object.entries(object).every((entry) => {
    return callback(entry)
  })
}
