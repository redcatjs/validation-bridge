import stringInt from './string-int'
export default function isInteger (value, options) {
  return Number.isInteger(value) || stringInt(value, options)
}
