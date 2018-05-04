import isISSN from 'validator/lib/isISSN'

export default function stringISSN (str, options) {
  return isISSN(str, options)
}
