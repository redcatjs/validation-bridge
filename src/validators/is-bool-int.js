export default function isBoolInt (value) {
  value = Number(value)
  return value === 0 || value === 1
}
