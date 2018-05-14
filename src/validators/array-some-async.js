import { isArray } from 'typeable'
export default async function arraySome (values, callback) {
  if (!isArray(values)) return false
  return await values.some(async (value) => {
    return await callback(value)
  })
}
