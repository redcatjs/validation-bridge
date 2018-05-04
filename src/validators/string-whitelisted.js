import isWhitelisted from 'validator/lib/isWhitelisted'

export default function stringWhitelisted (str, chars) {
  return isWhitelisted(str, chars)
}
