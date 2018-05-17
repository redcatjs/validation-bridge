import isObject from 'is-object'
export default function objectSomeEntry (object, callback) {
  if (!isObject(object)) return false
  return Object.entries(object).some((entry) => {
    return callback(entry)
  })
}
