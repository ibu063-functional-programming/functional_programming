// ************ TASK DESCRIPTION ************

/*
*   Create a container called `DataWrapper` that holds a single value.
*
*   Your wrapper must:
*   - Keep the value private
*   - Implement a `map` method that applies a function to the internal value
*   - Implement `valueOf()` to extract the raw value
*   - Implement `toString()` to return: Wrapped(value)
*
*? Example:
*? new DataWrapper(3).map(x => x + 1).toString() → "Wrapped(4)"
*/

// TODO: Implement DataWrapper

class DataWrapper {
  value;

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new DataWrapper(fn(this.value));
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `Wrapped(${this.value})`;
  }
}






// Below this comment any modification is prohibited.
module.exports = { DataWrapper };
