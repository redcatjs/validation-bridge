import isObject from 'is-object'

async function objectEveryValueAsync (object, callback) {
  if (!isObject(object)) return false
  const values = Object.values(object)
  for (let value of values) {
    if (!await callback(value)) {
      return false
    }
  }
  return true
}

export default objectEveryValueAsync
