import { isAbsent } from 'typeable'
import defaultWrapper from 'defaultWrapper'

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
