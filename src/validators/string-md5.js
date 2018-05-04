import isMD5 from 'validator/lib/isMD5'

export default function stringMD5 (str) {
  return isMD5(str)
}
