import { isString as typeableIsString } from 'typeable'

export default function isString (value) {
  return typeableIsString(value)
}
