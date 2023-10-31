export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  length(value) {
    const validator = (array) => array.length === value;
    this.validators.push(validator);
    return this;
  }
}
