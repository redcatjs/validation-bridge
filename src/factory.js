import defaultWrapper from './defaultWrapper'

export default function (rules, wrapper = defaultWrapper) {
  const ruleFactories = {}
  Object.entries(rules).forEach(([name, func]) => {
    ruleFactories[name] = function (options) {
      return function (value, allValues, ...extra) {
        return wrapper(func, value, options, allValues, ...extra)
      }
    }
  })
  return ruleFactories
}
