import isPostalCode from 'validator/lib/isPostalCode'

export default function stringPostalCode (str, locale) {
  return isPostalCode(str, locale)
}
