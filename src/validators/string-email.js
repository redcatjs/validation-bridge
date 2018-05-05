import isEmail from 'validator/lib/isEmail'

export default function stringEmail (value, options) {
  return isEmail(value, options)
}
