export default class NumberSchema {
  constructor(validators = [(value) => typeof value === 'number']) {
    this.validators = validators;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  even() {
    return new NumberSchema([...this.validators, (value) => value % 2 === 0]);
  }

  odd() {
    return new NumberSchema([...this.validators, (value) => value % 2 !== 0]);
  }
}
