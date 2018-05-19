import objectSomeValue from './object-some-value'
import arrayIn from './array-in'
export default function objectSomeValueIn (object, haystack) {
  return objectSomeValue(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
