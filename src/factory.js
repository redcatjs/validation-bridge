import { isPresent } from 'typeable'

function defaultWrapper(callback, values, allValues){
  if(!isPresent(value)){
    return true
  }
  return callback(values, allValues)
}

export default function (rules, wrapper = defaultWrapper) {
  const ruleFactories = {}
  Object.entries(rules).forEach(([name, func]) => {
    ruleFactories[name] = function (options) {
      return function(values, allValues){
        return wrapper(func, values, allValues)
      }
    }
  })
  return ruleFactories
}