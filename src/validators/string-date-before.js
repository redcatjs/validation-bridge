import isBefore from 'validator/lib/isBefore'

export default function stringDateBefore (str, date) {
  return isBefore(str, date)
}
