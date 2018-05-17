import isObject from 'is-object'

async function objectEveryEntryAsync (object, callback) {
  if (!isObject(object)) return false
  const entries = Object.entries(object)
  for (let entry of entries) {
    if (!await callback(entry)) {
      return false
    }
  }
  return true
}

export default objectEveryEntryAsync
