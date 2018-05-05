import isEmail from 'validor/lib/isEmail'

export default function stringEmail (value, options) {
  return isEmail(value, options)
}
