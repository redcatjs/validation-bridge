import isMACAddress from 'validator/lib/isMACAddress'

export default function stringMACAddress (str) {
  return isMACAddress(str)
}
