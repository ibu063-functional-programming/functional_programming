const complex = {
  id: 1,
  created: new Date(),
  info: { data: [1, 2, 3], flag: true },
};

const deepCopy = (obj) => {
  if (obj && typeof obj === "object") {
    const copy = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      copy[prop] = deepCopy(obj[prop]);
    });
    return copy;
  }
  return obj;
};

const newCopy = deepCopy(complex);

console.log(complex);
console.log(newCopy);


