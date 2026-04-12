const removeNonAlpha = (str) => str.replace(/[^a-zA-Z\s]/g, '');
const toUpperCase = (str) => str.toUpperCase();
const splitInWords = (str) => str.trim().split(/\s+/);
const arrayToSet = (arr) => new Set(arr);
const setToList = (set) => Array.from(set);

const composeTwo = (f, g) => (...args) => f(g(...args));

const getUniqueWords3 = composeTwo(
  setToList,
  composeTwo(
    arrayToSet,
    composeTwo(
      splitInWords,
      composeTwo(toUpperCase, removeNonAlpha)
    )
  )
);

// Example input
const GETTYSBURG_1_2 = `
Four score and seven years ago our fathers brought forth on this continent, 
a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
`;

console.log(getUniqueWords3(GETTYSBURG_1_2));
