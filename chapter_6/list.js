class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  // what does this part do ? // this is actually recursive..
  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

