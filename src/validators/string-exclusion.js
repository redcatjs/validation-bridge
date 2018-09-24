import stringInclusion from './string-inclusion'

export default function stringExclusion (value, options = {}) {
  return !stringInclusion(value, options)
}
