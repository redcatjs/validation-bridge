import { isArray } from 'typeable'

async function arraySomeAsync (values, callback) {
  if (!isArray(values)) return false

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

  for (let value of values) {
    if (await callback(value)) {
      return true
    }
  }
  return false
}

export default arraySomeAsync
