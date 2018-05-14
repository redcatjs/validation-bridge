import { isArray } from 'typeable'

async function arrayEveryAsync (values, callback) {
  if (!isArray(values)) return false
  for (let value of values) {
    if (!await callback(value)) {
      return false
    }
  }
  return true
}

export default arrayEveryAsync
