import isMimeType from 'validator/lib/isMimeType'

export default function stringMimeType (str) {
  return isMimeType(str)
}
