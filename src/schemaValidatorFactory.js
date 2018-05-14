import defaultWrapper from './defaultWrapper'

export default function schemaValidatorFactory (rules, errorHandler, wrapper = defaultWrapper) {
  class Schema {
    constructor (rules) {
      this.rules = rules
      this.errors = []
    }
    async validate (data) {
      await Object.entries(data).forEach(async ([key, value]) => {
        const func = this.rules[key]
        if (func === undefined || !await func(value, data)) {
          this.error(key, func, value)
        }
      })
      return this.errors.length === 0
    }
    error (fieldName, func, value) {
      const funcMessage = (func.message || 'unexpected value')
      const message = `error on field "${fieldName}" ${funcMessage}`
      const error = new Error(message)
      error.fieldName = fieldName
      error.value = value
      this.errors.push(error)
    }
    validateSync (data) {
      Object.entries(data).forEach(([key, value]) => {
        const func = this.rules[key]
        if (func === undefined || !func(value, data)) {
          this.error(key, value)
        }
      })
      return this.errors.length === 0
    }
  }

  function SchemaValidate (rules) {
    return async function (data) {
      const schema = new Schema(rules)
      let result
      try {
        result = await schema.validate(data)
      } catch (e) {
        if (typeof errorHandler === 'function') {
          errorHandler(e)
        } else {
          throw e
        }
      }
      return result
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
