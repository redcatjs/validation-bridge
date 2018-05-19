import objectEveryValueAsync from './object-every-value-async'
import arrayIn from './array-in'
export default function objectEveryValueAsyncIn (object, haystack) {
  return objectEveryValueAsync(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
