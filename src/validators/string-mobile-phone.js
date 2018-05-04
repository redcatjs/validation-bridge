import isMobilePhone from 'validator/lib/isMobilePhone'

export default function stringMobilePhone (str, locale, options) {
  return isMobilePhone(str, locale, options)
}
