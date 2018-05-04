import isPort from 'validator/lib/isPort'

export default function stringPort (str) {
  return isPort(str)
}
