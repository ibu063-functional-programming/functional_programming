/**
function pipelineReduce(...fns) {
  return fns.reduce(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args))
  );
}
 */

/**
 * Pipe two functions together.
 *
 * @param {Function} f - The first function to pipe.
 * @param {Function} g - The second function to pipe.
 * @returns {Function} A new function that is the result of piping f and g together.
 */
const pipeTwo = (f, g) => (...args) => g(f(...args));

const add = (x, y) => x + y;
const square = x => x * x;

const addThenSquare = pipeTwo(add, square);

console.log(addThenSquare(2, 3)); // (2 + 3)² = 25

