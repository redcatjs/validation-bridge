import validator from 'mysql-validator'
import isScalar from './is-scalar'
export default function mysql (value, columnType) {
  if (!isScalar(value)) return false
  if(typeof value==='number'){
    value = value.toString()
  }
  return !validator.check(value, columnType)
}
mysql.message = 'unexpected mysql value for this column'
