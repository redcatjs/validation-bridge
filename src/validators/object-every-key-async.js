import isObject from './is-object'

async function objectEveryKeyAsync (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = async function (value) {
      for (const func of arr) {
        if (!await func(value)) {
          return false
        }
      }
      return true
    }
  }

  const keys = Object.keys(object)
  for (const key of keys) {
    if (!await callback(key)) {
      return false
    }
  }
  return true
}

export default objectEveryKeyAsync
