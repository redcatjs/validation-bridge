import defaultWrapper from './defaultWrapper'

export default function schemaValidatorFactory (rules, errorHandler, wrapper = defaultWrapper) {
  class Schema {
    constructor (rules) {
      this.rules = rules
      this.errors = []
    }
    async validate (data) {
      await Object.entries(data).forEach(async ([key, value]) => {
        const funcList = this.rules[key]
        if (funcList === undefined) {
          this.error(key, undefined, value)
        } else {
          await funcList.forEach(async (func) => {
            if (!await func(value, data)) {
              this.error(key, func, value)
            }
          })
        }
      })
      return this.errors.length === 0
    }
    error (fieldName, func, value) {
      const funcMessage = ((func && func.message) || 'unexpected value')
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
          this.error(key, func, value)
        }
      })
      return this.errors.length === 0
    }
  }

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
