const author = {
 user: "fkereki",
 name: {
 first: "Federico",
 middle: "",
 last: "Kereki",
 },
 books: [
 { name: "Google Web Toolkit", year: 2010 },
 { name: "Functional Programming", year: 2017 },
 { name: "Javascript Cookbook", year: 2018 },
 ],
};
const view = (lens) => (obj) =>
  lens((x) => ({ map: () => x }))(obj);

const set = (lens) => (val) => (obj) =>
  lens(() => ({ map: (f) => f(val) }))(obj);

const lensProp = (key) => (fn) => (obj) =>
  fn(obj[key]).map((val) => ({ ...obj, [key]: val }));

const lensBooks = lensProp("books");
console.log(
 "The author wrote " +
 view(lensBooks)(author).length +
 " book(s)"
); // The author wrote 3 book(s)

const lens1 = lensProp("user");
console.log(set(lens1)("FEFK")(author));