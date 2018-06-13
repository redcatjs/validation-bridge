import isObject from './is-object'

async function objectSomeEntryAsync (object, callback) {
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

  const entries = Object.entries(object)
  for (const entry of entries) {
    if (await callback(entry)) {
      return true
    }
  }
  return false
}

export default objectSomeEntryAsync
