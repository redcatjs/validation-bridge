import { isArray } from 'typeable'
export default function arraySome (values, callback) {
  if (!isArray(values)) return false
  return values.some((value) => {
    return callback(value)
  })
}
