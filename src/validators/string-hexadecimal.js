import { isString } from 'typeable'

export default function stringHexadecimal (value) {
  if (!isString(value)) return false

  return /^[0-9A-F]+$/i.test(value)
}
