function compose(...fns) {
  return (...args) =>
    fns.reduceRight((result, fn) => fn(result), fns.pop()(...args));
}

const removeNonAlpha = str => str.replace(/[^a-z]/gi, ' ');
const toUpperCase = str => str.toUpperCase();
const splitInWords = str => str.trim().split(/\s+/);
const arrayToSet = arr => new Set(arr);
const setToList = set => Array.from(set).sort();

const getUniqueWords = compose(
  setToList,
  arrayToSet,
  splitInWords,
  toUpperCase,
  removeNonAlpha
);

const sentence = "Hello world! Hello functional composition.";
console.log(getUniqueWords(sentence)); // [ 'COMPOSITION', 'FUNCTIONAL', 'HELLO', 'WORLD' ]