import { isArray } from 'typeable'

export default function arraySomeIn (values, blacklist) {
  if (!isArray(values)) return false
  return values.some(function (value) {
    return blacklist.includes(value)
  })
}
