import isSurrogatePair from 'validator/lib/isSurrogatePair'

export default function stringSurrogatePair (str) {
  return isSurrogatePair(str)
}
