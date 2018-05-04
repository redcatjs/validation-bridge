import isAlphanumeric from 'validator/lib/isAlphanumeric'

export default function stringAlphanumeric (str, locale) {
  return isAlphanumeric(str, locale)
}
