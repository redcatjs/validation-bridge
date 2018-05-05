// helper for async-validator

import Bluebird from 'bluebird'
import Schema from 'async-validator'

Schema.validateAsync = Bluebird.promisify(Schema.validate)

export default function schemaValidatorFactory (rules) {
  function SchemaValidate (descriptor) {
    return function (data) {
      const validator = new Schema(descriptor)
      return validator.validateAsync(data)
    }
  }
  Object.entries(rules).forEach(([ruleName, func]) => {
    SchemaValidate[ruleName] = function (options) {
      return function (rule, value, callback, allValues) {
        const errors = []
        if (!func(value, options, allValues)) {
          const fieldName = rule.field
          const message = 'error on field "' + fieldName + '" ' + (func.message || ('expected ' + ruleName))
          const error = new Error(message)
          error.fieldName = fieldName
          error.ruleName = ruleName
          errors.push(error)
        }
        callback(errors)
      }
    }
  })
  return SchemaValidate
}
