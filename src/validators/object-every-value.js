import isObject from 'is-object'
export default function objectEveryValue (object, callback) {
  if (!isObject(object)) return false
  return Object.values(object).every((value) => {
    return callback(value)
  })
}
