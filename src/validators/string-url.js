import isURL from 'validator/lib/isURL'

export default function stringURL (str, options) {
  return isURL(str, options)
}
