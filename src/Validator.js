import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  /* eslint-disable */
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  /* eslint-enable */
}

// TASK 1
// const v = new Validator();
// console.log(v.string().isValid(3));

// TASK 2
// const validator = new Validator();
// const schema1 = validator.number().even();
// const schema2 = validator.number().odd();
// console.log(schema1.isValid(''))
// console.log(schema1.isValid(2))
// console.log(schema2.isValid(2))
// console.log(schema2.isValid(3))

// TASK 3
// const validator = new Validator();
// const schema = validator.array();
// console.log(schema.isValid('Hello!'))
// console.log(schema.isValid(123))
// console.log(schema.isValid([]))
// console.log(schema.isValid([1, 23, 4]))
