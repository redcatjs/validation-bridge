import { isArray } from 'typeable'

async function arrayEveryAsync (values, callback) {
  if (!isArray(values)) return false

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

  for (const value of values) {
    if (!await callback(value)) {
      return false
    }
  }
  return true
}

export default arrayEveryAsync
