import NumberSchema from './NumberSchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringSchema();
  }

  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberSchema();
  }
}

// const validator = new Validator();
// const schema1 = validator.number().even();
// const schema2 = validator.number().odd();

// console.log(schema1.isValid(''))
// console.log(schema1.isValid(2))
// console.log(schema2.isValid(2))
// console.log(schema2.isValid(3))

// const v = new Validator();
// console.log(v.string().isValid(3));
