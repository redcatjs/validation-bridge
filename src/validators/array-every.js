import { isArray } from 'typeable'
export default function arrayEvery (values, callback) {
  if (!isArray(values)) return false
  return values.every((value) => {
    return callback(value)
  })
}
