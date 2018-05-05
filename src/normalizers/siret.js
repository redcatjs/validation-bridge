export default function siret (value) {
  return value && value
    .replace(/\s+/g, '')
    .toUpperCase()
    .slice(0, 14)
}
