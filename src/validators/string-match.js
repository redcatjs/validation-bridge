import { isString } from 'typeable'

export default function stringMatch (value, recipe = {}) {
  if (!isString(value)) return false

  const { regexp } = recipe
  return regexp.test(value)
}
