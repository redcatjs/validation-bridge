import { isArray } from 'typeable'

export default async function arrayEveryAsync (values, callback) {
  if (!isArray(values)) return false
  for (let value of values) {
    if (!await callback(value)) {
      return false
    }
  }
  return true
}
