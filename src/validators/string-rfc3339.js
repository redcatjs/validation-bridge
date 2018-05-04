import isRFC3339 from 'validator/lib/isRFC3339'

export default function stringRFC3339 (str) {
  return isRFC3339(str)
}
