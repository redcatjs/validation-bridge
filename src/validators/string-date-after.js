import isAfter from 'validator/lib/isAfter'

export default function stringDateAfter (value, date) {
  return isAfter(value, date)
}
