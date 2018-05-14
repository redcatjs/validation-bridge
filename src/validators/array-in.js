import { isArray } from 'typeable'

export default function arrayIn (needle, haystack) {
  if (!isArray(needle)) return false
  return haystack.includes(needle)
}
