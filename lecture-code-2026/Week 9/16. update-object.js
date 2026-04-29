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

const setByPath = (arr, value, obj) => {
  if (!(arr[0] in obj)) {
    obj[arr[0]] = arr.length === 1
      ? null
      : Number.isInteger(+arr[1])
      ? []
      : {};
  }

  if (arr.length > 1) {
    return setByPath(arr.slice(1), value, obj[arr[0]]);
  } else {
    obj[arr[0]] = value;
    return obj;
  }
};

const updateObject = (arr, obj, value) => {
  const newObj = deepCopy(obj);
  setByPath(arr, value, newObj);
  return deepFreeze(newObj);
};

const myObj3 = {
 d: 22,
 m: 9,
 o: { c: "MVD", i: "UY", f: { a: 56 } },
};
const new1 = updateObject(["m"], myObj3, "sep");
console.log(new1); // {d: 22, m: "sep", o: {c: "MVD", i: "UY", f: {a: 56}}};
const new2 = updateObject(["b"], myObj3, 220960);
console.log(new2); // {d: 22, m: 9, o: {c: "MVD", i: "UY", f: {a: 56}}, b: 220960};
const new3 = updateObject(["o", "f", "a"], myObj3, 9999);
console.log(new3); // {d: 22, m: 9, o: {c: "MVD", i: "UY", f: {a: 9999}}};
const new4 = updateObject(
 ["o", "f", "j", "k", "l"],
 myObj3,
 "deep"
);
console.log(new4); // {d: 22, m: 9, o: {c: "MVD", i: "UY", f: {a: 56, j: {k:  "deep"}}}};

