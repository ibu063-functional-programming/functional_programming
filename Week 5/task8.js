//students.sort((a, b) => a.name.localeCompare(b.name));

function invert(compareFn) {
  return function (...args) {
    return -compareFn(...args);
  }
}
module.exports = invert;