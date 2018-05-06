import { isPresent } from 'typeable'

function defaultWrapper (callback, value, allValues) {
  if (!isPresent(value)) {
    return true
  }
  return callback(value, allValues)
}

export default function (rules, wrapper = defaultWrapper) {
  const ruleFactories = {}
  Object.entries(rules).forEach(([name, func]) => {
    ruleFactories[name] = function (options) {
      return function (value, allValues) {
        return wrapper(func, value, allValues)
      }
    }
  })
  return ruleFactories
}
