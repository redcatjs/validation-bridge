import defaultWrapper from './defaultWrapper'
import Schema from './schema'

export default function schemaValidatorFactory (rules, errorHandler, wrapper = defaultWrapper, defaultStrict) {
  function SchemaValidate (rules, strict) {
    if (typeof rules === 'boolean') {
      const _strict = rules
      rules = strict
      strict = _strict
    }
    if (strict === undefined) {
      strict = defaultStrict
    }
    const schema = new Schema(rules, strict)
    return async function (data, strict) {
      if (typeof data === 'boolean') {
        const _strict = data
        data = strict
        strict = _strict
      }
      if (!await schema.validate(data, strict)) {
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
