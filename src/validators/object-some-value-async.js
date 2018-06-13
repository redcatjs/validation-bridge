import isObject from './is-object'

async function objectSomeValueAsync (object, callback) {
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

  const values = Object.values(object)
  for (const value of values) {
    if (await callback(value)) {
      return true
    }
  }
  return false
}

export default objectSomeValueAsync
