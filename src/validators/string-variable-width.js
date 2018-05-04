import isVariableWidth from 'validator/lib/isVariableWidth'

export default function stringVariableWidth (str) {
  return isVariableWidth(str)
}
