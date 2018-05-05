import isIn from 'validator/lib/isIn'

export default function ENUM (str, values) {
  return isIn(str, values)
}
