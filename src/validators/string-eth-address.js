import {isString} from 'typeable'

export default function stringETHAddress (value) {
  if (!isString(value)) return false

  return /^0x[a-fA-F0-9]{40}$/i.test(value)
}
