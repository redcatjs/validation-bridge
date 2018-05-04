import isDataURI from 'validator/lib/isDataURI'

export default function stringDataURI (str) {
  return isDataURI(str)
}
