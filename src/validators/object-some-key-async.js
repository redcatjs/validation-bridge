import isObject from 'is-object'

async function objectSomeKeyAsync (object, callback) {
  if (!isObject(object)) return false
  const keys = Object.keys(object)
  for (let key of keys) {
    if (await callback(key)) {
      return true
    }
  }
  return false
}

export default objectSomeKeyAsync
