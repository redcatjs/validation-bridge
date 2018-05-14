export default function defaultWrapper (callback, value, options, allValues) {
  if (isAbsent(value) && !callback.isRequired) {
    return true
  }
  return callback(value, options, allValues)
}
