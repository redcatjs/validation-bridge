import { isArray } from 'typeable'

export default async function arraySome (values, callback) {
  if (!isArray(values)) return false

  for (let value of values) {
    if (await callback(value)) {
      return true
    }
  }
  return false
}
