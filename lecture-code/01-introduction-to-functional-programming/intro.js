/*
// imperative.js
const data = [
  { name: "John", age: 23, other: "xxx" },
  { name: "Paul", age: 18, other: "yyy" },
  { name: "George", age: 16, other: "zzz" },
  { name: "Ringo", age: 25, other: "ttt" },
];

const result1 = [];

for (let i = 0; i < data.length; i++) {
  if (data[i].age >= 21) {
    result1.push(data[i]);
  }
}

console.log(result1);
*/

// declarative.js
const data = [
  { name: "John", age: 23, other: "xxx" },
  { name: "Paul", age: 18, other: "yyy" },
  { name: "George", age: 16, other: "zzz" },
  { name: "Ringo", age: 25, other: "ttt" },
];

const isAdult = (person) => person.age >= 21;
const result2 = data.filter(isAdult);
console.log(result2)

/*
// factorial.js
function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5)); // 120
*/

/*
function sum1(num1, num2) {
  sum = num1+num2;
  return sum
}

console.log(sum1(1, 2));
console.log(sum1(3, 2));*/