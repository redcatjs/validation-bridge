import isFullWidth from 'validator/lib/isFullWidth'

export default function stringFullWidth (str) {
  return isFullWidth(str)
}
