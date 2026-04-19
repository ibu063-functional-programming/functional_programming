const view = (someLens) => (someObj) => someLens.getter(someObj);
const set = (lens) => (newVal) => (obj) => lens.setter(newVal)(obj);
const over = (lens) => (mapFn) => (obj) =>
  lens.setter(mapFn(lens.getter(obj)))(obj);
const composeTwoLenses = (lens1, lens2) => ({
  getter: (obj) => lens2.getter(lens1.getter(obj)),
  setter: (newVal) => (obj) =>
    lens1.setter(lens2.setter(newVal)(lens1.getter(obj)))(obj),
});

// Lens helpers
const lensProp = (attr) => ({
  getter: (obj) => obj[attr],
  setter: (val) => (obj) => ({ ...obj, [attr]: val }),
});

const deepObject = {
 a: 1,
 b: 2,
 c: {
 d: 3,
 e: {
 f: 6,
 g: { i: 9, j: { k: 11 } },
 h: 8,
 },
 },
};

const lC = lensProp("c");
const lE = lensProp("e");
const lG = lensProp("g");
const lJ = lensProp("j");
const lK = lensProp("k");

const lJK = composeTwoLenses(lJ, lK);
const lGJK = composeTwoLenses(lG, lJK);
const lEGJK = composeTwoLenses(lE, lGJK);
const lCEGJK1 = composeTwoLenses(lC, lEGJK);
console.log(view(lCEGJK1)(deepObject));
const lCE = composeTwoLenses(lC, lE);
const lCEG = composeTwoLenses(lCE, lG);
const lCEGJ = composeTwoLenses(lCEG, lJ);
const lCEGJK2 = composeTwoLenses(lCEGJ, lK);
console.log(view(lCEGJK2)(deepObject));


const setTo60 = set(lCEGJK1)(60)(deepObject);

const setToDouble = over(lCEGJK2)((x) => x * 2)(deepObject);
console.log(setToDouble);