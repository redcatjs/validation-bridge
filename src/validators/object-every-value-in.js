import objectEveryValue from './object-every-value'
import arrayIn from './array-in'
export default function objectEveryValueIn (object, haystack) {
  return objectEveryValue(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
