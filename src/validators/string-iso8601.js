import isISO8601 from 'validator/lib/isISO8601'

export default function stringISO8601 (str) {
  return isISO8601(str)
}
