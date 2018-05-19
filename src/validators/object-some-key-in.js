import objectSomeKey from './object-some-key'
import arrayIn from './array-in'
export default function objectSomeKeyIn (object, haystack) {
  return objectSomeKey(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
