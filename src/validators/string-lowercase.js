import { isString } from 'typeable'

export default function stringLowercase (value) {
  if (!isString(value)) return false

  return value === value.toLowerCase()
}
