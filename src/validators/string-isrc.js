import isISRC from 'validator/lib/isISRC'

export default function stringISRC (str) {
  return isISRC(str)
}
