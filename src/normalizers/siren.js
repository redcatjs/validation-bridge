export default function siren(value){
  return value && value
    .replace(/\s+/g, '')
    .toUpperCase()
    .slice(0,9)
}
