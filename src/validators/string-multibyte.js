import isMultibyte from 'validator/lib/isMultibyte'

export default function stringMultibyte (str) {
  return isMultibyte(str)
}
