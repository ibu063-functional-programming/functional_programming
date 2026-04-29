const view = (someLens) => (someObj) => someLens.getter(someObj);
const set = (lens) => (newVal) => (obj) => lens.setter(newVal)(obj);
const composeTwoLenses = (lens1, lens2) => ({
  getter: (obj) => lens2.getter(lens1.getter(obj)),
  setter: (newVal) => (obj) =>
    lens1.setter(lens2.setter(newVal)(lens1.getter(obj)))(obj),
});

const author = {
  user: 'fkereki',
  name: { first: 'Federico', middle: '', last: 'Kereki' },
  books: [
    { name: 'Book A', year: 2010 },
    { name: 'Book B', year: 2017 }
  ]
};

// Lens helpers
const lensProp = (attr) => ({
  getter: (obj) => obj[attr],
  setter: (val) => (obj) => ({ ...obj, [attr]: val }),
});

// Compose lens for `name` and then for `last`
const nameLens = lensProp("name");
const lastLens = lensProp("last");
const fullLens = composeTwoLenses(nameLens, lastLens);

// View last name
console.log(view(fullLens)(author)); // "Kereki"

// Set last name
const updatedAuthor = set(fullLens)("Smith")(author);
console.log(updatedAuthor.name.last); // "Smith"