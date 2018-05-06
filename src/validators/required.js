import { isPresent } from 'typeable'

export default function required (value) {
  return isPresent(value)
}
required.isRequired = true