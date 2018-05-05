import isIn from 'validator/lib/isIn'

export default function enum (str, values) {
  return isIn(str, values)
}
