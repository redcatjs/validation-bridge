import isObject from './is-object'

async function objectSomeEntryAsync (object, callback) {
  if (!isObject(object)) return false
  const entries = Object.entries(object)
  for (let entry of entries) {
    if (await callback(entry)) {
      return true
    }
  }
  return false
}

export default objectSomeEntryAsync
