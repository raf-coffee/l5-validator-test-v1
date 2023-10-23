export default class ArraySchema {
  constructor(validators = [(arr) => Array.isArray(arr)]) {
    this.validators = validators;
  }

  isValid(arr) {
    return this.validators.every((validator) => validator(arr));
  }

  length(len) {
    return new ArraySchema([...this.validators, (arr) => arr.length === len]);
  }
}
