import { isArray as typeableIsArray } from 'typeable'

export default function isArray (value) {
  return typeableIsArray(value)
}
