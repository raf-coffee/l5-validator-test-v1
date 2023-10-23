export default class ObjectSchema {
  constructor(validators = {}) {
    this.validators = validators;
  }

  isValid(obj) {
    return Object.entries(this.validators).every(([key, value]) => value.isValid(obj[key]));
  }

  shape(obj) {
    return new ObjectSchema({ ...this.validators, ...obj });
  }
}
