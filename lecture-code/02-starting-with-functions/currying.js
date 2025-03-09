const sum3 = (x, y, z) => x + y + z;
console.log(sum3(1, 2, 3)); // 6

const curriedSum = x => y => z => x + y + z;
console.log(curriedSum(1)(2)(3)); // 6

const add5 = curriedSum(5);
console.log(add5(10)(3)); // 18