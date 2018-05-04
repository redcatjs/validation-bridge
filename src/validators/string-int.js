import isInt from 'validator/lib/isInt'

export default function stringInt (str, options) {
  return isInt(str, options)
}
