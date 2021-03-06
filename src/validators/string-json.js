import { isString } from 'typeable'

export default function stringJSON (value) {
  if (!isString(value)) return false

  try {
    let obj = JSON.parse(value)
    return !!obj && typeof obj === 'object'
  } catch (e) {}
  return false
}
