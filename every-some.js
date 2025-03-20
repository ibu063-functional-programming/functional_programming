const allNegative = markers.every((v) => v.lat < 0 && v.lon < 0);
console.log(allNegative); // false

const someNegative = markers.some((v) => v.lat < 0 && v.lon < 0);
console.log(someNegative); // true