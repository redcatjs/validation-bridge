import matches from 'validator/lib/matches'

export default function stringMatch (str, pattern, modifiers) {
  return matches(str, pattern, modifiers)
}
