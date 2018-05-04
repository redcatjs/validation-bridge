import isAscii from 'validator/lib/isAscii'

export default function stringAscii (str) {
  return isAscii(str)
}
