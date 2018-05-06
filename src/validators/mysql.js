import validator from 'mysql-validator'
import { isString } from 'typeable'
export default function mysql (value, columnType) {
  if (!isString(value)) return false
  return !validator.check(value, columnType)
}
mysql.message = 'unexpected mysql value for this column'
