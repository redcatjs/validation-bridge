import required from './validators/required'
export default function defaultWrapper (callback, value, options, allValues, ...extra) {
  if (!required(value) && !callback.isRequired) {
    return true
  }
  return callback(value, options, allValues, ...extra)
}
