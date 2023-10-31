export default class NumberSchema {
  validators = [(value) => typeof value === 'number'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  even() {
    const validator = (value) => value % 2 === 0;
    this.validators.push(validator);
    return this;
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    this.validators.push(validator);
    return this;
  }
}
