import isObject from 'is-object'
export default function objectEveryEntry (object, callback) {
  if (!isObject(object)) return false
  return Object.entries(object).every((entry) => {
    return callback(entry)
  })
}
