import validator from 'mysql-validator'
export default function mysql (value, columnType) {
  return !validator.check(value, columnType)
}
mysql.message = 'unexpected mysql value for this column'
