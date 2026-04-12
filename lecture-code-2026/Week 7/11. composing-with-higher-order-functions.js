const removeNonAlpha = str => str.replace(/[^a-z]/gi, ' ');
const toUpperCase = str => str.toUpperCase();
const splitInWords = str => str.trim().split(/\s+/);
const arrayToSet = arr => new Set(arr);
const setToList = set => Array.from(set).sort();

const getUniqueWords2 = (str) =>
  setToList(
    arrayToSet(
      splitInWords(toUpperCase(removeNonAlpha(str)))
    )
  );
const GETTYSBURG_1_2 = `
Four score and seven years ago our fathers brought forth on this continent, 
a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
`;

console.log(getUniqueWords2(GETTYSBURG_1_2));