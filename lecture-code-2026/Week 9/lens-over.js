const triple = (x) => x + x + x;

// Simulating a lens for `user` field
const lens1 = {
  get: (obj) => obj.user,
  set: (val, obj) => ({
    ...obj,
    user: val
  })
};

// A simple "over" function to apply a transformation using the lens
const over = (lens) => (fn) => (obj) => {
  const value = lens.get(obj);
  const updated = fn(value);
  return lens.set(updated, obj);
};

// Original author object
const author = {
  user: 'fkereki',
  name: { first: 'Federico', middle: '', last: 'Kereki' },
  books: [
    { name: 'Google Web Toolkit', year: 2010 },
    { name: 'Functional Programming', year: 2017 },
    { name: 'Javascript Cookbook', year: 2018 }
  ]
};

// Apply transformation
const newAuthor = over(lens1)(triple)(author);

console.log(newAuthor);