/* eslint-disable class-methods-use-this */
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}
