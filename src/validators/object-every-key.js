import isObject from 'is-object'
export default function objectEveryKey (object, callback) {
  if (!isObject(object)) return false
  return Object.keys(object).every((key) => {
    return callback(key)
  })
}
