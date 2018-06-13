import isObject from './is-object'

async function objectSomeKeyAsync (object, callback) {
  if (!isObject(object)) return false

  if (callback instanceof Array) {
    const arr = callback
    callback = async function (value) {
      for (const func of arr) {
        if (await func(value)) {
          return true
        }
      }
      return false
    }
  }

  const keys = Object.keys(object)
  for (let key of keys) {
    if (await callback(key)) {
      return true
    }
  }
  return false
}

export default objectSomeKeyAsync
