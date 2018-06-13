import isObject from './is-object'

async function objectEveryValueAsync (object, callback) {
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

  const values = Object.values(object)
  for (const value of values) {
    if (!await callback(value)) {
      return false
    }
  }
  return true
}

export default objectEveryValueAsync
