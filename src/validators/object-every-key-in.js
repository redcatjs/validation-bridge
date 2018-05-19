import objectEveryKey from './object-every-key'
import arrayIn from './array-in'
export default function objectEveryKeyIn (object, haystack) {
  return objectEveryKey(object, function (needle) {
    return arrayIn(needle, haystack)
  })
}
