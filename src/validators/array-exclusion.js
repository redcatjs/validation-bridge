import arrayInclusion from './array-inclusion'

export default function arrayExclusion (value, options = {}) {
  return !arrayInclusion(value, options)
}
