// Deep freeze helper
const deepFreeze = (obj) => {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      deepFreeze(obj[prop]);
    });
  }
  return obj;
};

// Deep copy helper
const deepCopy = (obj) => {
  let aux = obj;
  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      aux[prop] = deepCopy(obj[prop]);
    });
  }
  return aux;
};

// Get value by nested path
const getByPath = (arr, obj) => {
  if (arr[0] in obj) {
    return arr.length > 1
      ? getByPath(arr.slice(1), obj[arr[0]])
      : deepCopy(obj[arr[0]]); //obj[arr[0]]
  } else {
    return undefined;
  }
};

// Usage
const myObj4 = deepFreeze({
  d: 22,
  m: 9,
  o: { c: "MVD", i: "UY", f: { a: 56 } },
});
/*
console.log(getByPath(["d"], myObj4));  // 22
console.log(getByPath(["o"], myObj4));  // {c: "MVD", i: "UY", f: {a: 56}}
console.log(getByPath(["o", "c"], myObj4)); // "MVD"
console.log(getByPath(["o", "f", "a"], myObj4)); // 56
*/
test = getByPath(["o"], myObj4)
test.c = "XXX";
console.log(myObj4)
console.log(test)