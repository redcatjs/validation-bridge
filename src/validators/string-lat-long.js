import isLatLong from 'validator/lib/isLatLong'

export default function stringLatLong (str) {
  return isLatLong(str)
}
