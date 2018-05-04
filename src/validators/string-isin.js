import isISIN from 'validator/lib/isISSN'

export default function stringISIN (str) {
  return isISIN(str)
}
