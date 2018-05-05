export default function (rules) {
  const ruleFactories = {}
  Object.entries(rules).forEach(([name, func]) => {
    ruleFactories[name] = function (options) {
      return function (value, allValues) {
        return func(value, options, allValues)
      }
    }
  })
  return ruleFactories
}
