import isObject from './is-object'
export default function objectSomeValue (object, callback) {
  if (!isObject(object)) return false
  return Object.values(object).some((value) => {
    return callback(value)
  })
}
