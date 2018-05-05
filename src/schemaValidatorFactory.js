// helper for async-validator

export default function schemaValidatorFactory(rules){
  const schemaValidators = {}
  Object.entries(rules).forEach(([ruleName, func])=>{
    schemaValidators[ruleName] = function(options){
      return function(rule, value, callback, allValues){
        const errors = []
        if( ! func(value, options, allValues) ){
          const fieldName = rule.field
          const message = 'error on field "' + fieldName + '" ' + message + ( func.message || ('expected ' + ruleName) )
          const error = new Error(message)
          error.fieldName = fieldName
          error.ruleName = ruleName
          errors.push(error)
        }
        callback(errors)
      }
    }
  })
  return schemaValidators
}
