import isFloat from 'validator/lib/isFloat'

export default function stringFloat (str, options) {
  return isFloat(str, options)
}
