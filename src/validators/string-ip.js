import isIP from 'validator/lib/isIP'

export default function stringIP (str, version) {
  return isIP(str, version)
}
