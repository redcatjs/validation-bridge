import isObject from 'is-object'
export default function objectSomeKey (object, callback) {
  if (!isObject(object)) return false
  return Object.keys(object).some((key) => {
    return callback(key)
  })
}
