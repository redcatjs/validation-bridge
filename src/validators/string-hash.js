import isHash from 'validator/lib/isHash'

export default function stringHash (str, algorithm) {
  return isHash(str, algorithm)
}
