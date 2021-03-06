import { isString } from 'typeable'

export default function stringUppercase (value) {
  if (!isString(value)) return false

  return value === value.toUpperCase()
}
