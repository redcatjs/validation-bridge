import { isArray } from 'typeable'
export default async function arrayEveryAsync (values, callback) {
  if (!isArray(values)) return false
  return await values.every(async (value) => {
    return await callback(value)
  })
}
