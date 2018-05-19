import { isArray } from 'typeable'

export default function arrayIn (needle, haystack) {
  if (!isArray(haystack)) return false
  return haystack.includes(needle)
}
