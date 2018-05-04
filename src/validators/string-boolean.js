import isBoolean from 'validator/lib/isBoolean'

export default function stringBoolean (str) {
  return isBoolean(str)
}
