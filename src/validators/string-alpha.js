import isAlpha from 'validator/lib/isAlpha'

export default function stringAlpha (str, locale) {
  return isAlpha(str, locale)
}
