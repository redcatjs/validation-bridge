import { toString } from 'typeable'
import stringHexadecimal from './string-hexadecimal'

export default function BSONObjectID (value){
  value = toString(value)

  return (
    stringHexadecimal(value)
    && value.length === 24
  )
}
