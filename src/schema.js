export default class Schema {
  constructor (rules, strict = false) {
    this.rules = rules
    this.errors = []
    this.strict = strict
  }
  error (fieldName, func, value) {
    const funcMessage = ((func && func.message) || 'unexpected value')
    const message = `error on field "${fieldName}" ${funcMessage}`
    const error = new Error(message)
    error.fieldName = fieldName
    error.value = value
    this.errors.push(error)
  }
  async validate (data) {
    await Object.entries(data).forEach(async ([key, value]) => {
      const funcList = this.rules[key]
      if (funcList === undefined) {
        if (this.strict) {
          this.error(key, undefined, value)
        }
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
  validateSync (data) {
    Object.entries(data).forEach(([key, value]) => {
      const funcList = this.rules[key]
      if (funcList === undefined) {
        if (this.strict) {
          this.error(key, undefined, value)
        }
      } else {
        funcList.forEach((func) => {
          if (!func(value, data)) {
            this.error(key, func, value)
          }
        })
      }
    })
    return this.errors.length === 0
  }
}
