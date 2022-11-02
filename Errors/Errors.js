/**
 * Custom Value Error Class
 * This error is thrown when a value is expected
 * and is not provided
 */
class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * Custom Type Error Class
 */
class TypeError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = { ValueError, TypeError };
