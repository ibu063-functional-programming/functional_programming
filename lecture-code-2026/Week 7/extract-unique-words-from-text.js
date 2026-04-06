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

const GETTYSBURG_1_2 = `Four score and seven years ago
our fathers brought forth on this continent, a new nation,
conceived in liberty, and dedicated to the proposition that all
men are created equal. Now we are engaged in a great civil war,
testing whether that nation, or any nation so conceived and so
dedicated, can long
endure.`;
console.log(getUniqueWords(GETTYSBURG_1_2));