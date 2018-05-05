// helper for async-validator

import Bluebird from 'bluebird'
import Schema from 'async-validator'

Schema.prototype.validateAsync = Bluebird.promisify(Schema.prototype.validate)

export default function schemaValidatorFactory (rules, errorHandler) {
  function SchemaValidate (descriptor) {
    return async function (data) {
      const validator = new Schema(descriptor)
      try{
        const result = await validator.validateAsync(data)
      }
      catch(e){
        if(typeof errorHandler === 'function'){
          errorHandler(e)
        }
        else{
          throw e
        }
      }
      return result
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
