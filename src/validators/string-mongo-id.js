import isMongoId from 'validator/lib/isMongoId'

export default function stringMongoId (str) {
  return isMongoId(str)
}
