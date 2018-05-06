import { isAbsent } from 'typeable'

function defaultWrapper (callback, value, options, allValues) {
  if (isAbsent(value) && !callback.isRequired) {
    return true
  }
  return callback(value, options, allValues)
}

export default function (rules, wrapper = defaultWrapper) {
  const ruleFactories = {}
  Object.entries(rules).forEach(([name, func]) => {
    ruleFactories[name] = function (options) {
      return function (value, allValues) {
        return wrapper(func, value, options, allValues)
      }
    }
  })
  return ruleFactories
}