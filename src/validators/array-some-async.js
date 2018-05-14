import { isArray } from 'typeable'

async function arraySomeAsync (values, callback) {
  if (!isArray(values)) return false

  for (let value of values) {
    if (await callback(value)) {
      return true
    }
  }
  return false
}

export default arraySomeAsync
