import isObject from './is-object'

async function objectEveryKeyAsync (object, callback) {
  if (!isObject(object)) return false
  const keys = Object.keys(object)
  for (let key of keys) {
    if (!await callback(key)) {
      return false
    }
  }
  return true
}

export default objectEveryKeyAsync
