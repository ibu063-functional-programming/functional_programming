const { Maybe } = require('./maybe.cjs');

const fakeSearchForSomething = (key) => {
  if (key % 2 === 0) {
    return { key, some: "whatever", other: "more data" };
  } else {
    throw new Error("Not found");
  }
};

const findSomething = (key) => {
  try {
    const something = fakeSearchForSomething(key);
    return Maybe.of(something);
  } catch (e) {
    return Maybe.of(null);
  }
}

const getSome = (something) =>
  Maybe.of(something.map((x) => x.some));

const getSomeFromSomething = (key) =>
  getSome(findSomething(key));

const xxx = getSomeFromSomething(2222).valueOf().valueOf(); // "whatever"
const yyy = getSomeFromSomething(9999).valueOf().valueOf(); // undefined

console.log(xxx);
console.log(yyy);