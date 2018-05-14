export default function required (value) {
  return value !== undefined && value !== null && value !== ''
}
required.isRequired = true
