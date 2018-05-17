import isObject from './is-object'

async function objectSomeValueAsync (object, callback) {
  if (!isObject(object)) return false
  const values = Object.values(object)
  for (let value of values) {
    if (await callback(value)) {
      return true
    }
  }
  return false
}

export default objectSomeValueAsync
