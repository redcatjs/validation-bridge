import isByteLength from 'validator/lib/isByteLength'

export default function stringByteLength (str, options) {
  return isByteLength(str, options)
}
