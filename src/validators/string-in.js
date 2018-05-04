import isIn from 'validator/lib/isIn'

export default function stringIn (str, values) {
  return isIn(str, values)
}
