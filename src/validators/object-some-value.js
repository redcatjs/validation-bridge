import isObject from './is-object'
export default function objectSomeValue (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = function (value) {
      return arr.some(func => func(value))
    }
  }

  return Object.values(object).some((value) => {
    return callback(value)
  })
}
