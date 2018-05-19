import objectEveryKeyAsync from './object-every-key-async'
import arrayIn from './array-in'
export default function objectEveryKeyAsyncIn (object, haystack) {
  return objectEveryKeyAsync(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
