import isDecimal from 'validator/lib/isDecimal'

export default function stringDecimal (str, options) {
  return isDecimal(str, options)
}
