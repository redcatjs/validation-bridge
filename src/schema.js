function ensureKeysExists (keys, data) {
  keys.forEach(key => {
    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      data[key] = undefined
    }
  })
}

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
    ensureKeysExists(Object.keys(this.rules), data)
    const entries = Object.entries(data)
    for (let [key, value] of entries) {
      const funcList = this.rules[key]
      if (funcList === undefined) {
        if (this.strict) {
          this.error(key, undefined, value)
        }
      } else {
        for (let func of funcList) {
          if (!await func(value, data)) {
            this.error(key, func, value)
          }
        }
      }
    }
    return this.errors.length === 0
  }
  validateSync (data) {
    ensureKeysExists(Object.keys(this.rules), data)
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
