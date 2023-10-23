export default class StringSchema {
  constructor() {
    this.validators = [
      (value) => typeof value === 'string',
    ];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
