import objectSomeValueAsync from './object-some-value-async'
import arrayIn from './array-in'
export default function objectSomeValueAsyncIn (object, haystack) {
  return objectSomeValueAsync(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
