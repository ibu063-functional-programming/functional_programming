const myObj = { d: 22, m: 9 };
const newObj1 = Object.assign({}, myObj);
const newObj2 = { ...myObj };

console.log(myObj);
console.log(newObj1);
console.log(newObj2);