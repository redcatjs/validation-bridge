import defaultWrapper from './defaultWrapper'
import Schema from './schema'

export default function schemaValidatorFactory (rules, errorHandler, wrapper = defaultWrapper) {

  function SchemaValidate (rules) {
    return async function (data) {
      const schema = new Schema(rules)
      if (!await schema.validate(data)) {
        if (typeof errorHandler === 'function') {
          errorHandler(schema.errors)
        }
        return false
      }
      return true
    }
  }

  Object.entries(rules).forEach(([ruleName, func]) => {
    SchemaValidate[ruleName] = function (options) {
      return function (value, allValues) {
        return wrapper(func, value, options, allValues)
      }
    }
  })

  return SchemaValidate
}
