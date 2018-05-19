import objectSomeKeyAsync from './object-some-key-async'
import arrayIn from './array-in'
export default function objectSomeKeyAsyncIn (object, haystack) {
  return objectSomeKeyAsync(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
