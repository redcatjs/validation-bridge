import isObject from './is-object'
export default function objectSomeEntry (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.some(func => func(value))
    }
  }

  return Object.entries(object).some((entry) => {
    return callback(entry)
  })
}
