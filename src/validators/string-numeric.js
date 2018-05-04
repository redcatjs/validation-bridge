import isNumeric from 'validator/lib/isNumeric'

export default function stringNumeric (str) {
  return isNumeric(str)
}
