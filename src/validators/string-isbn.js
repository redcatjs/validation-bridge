import isISBN from 'validator/lib/isISBN'

export default function stringISBN (str, version) {
  return isISBN(str, version)
}
