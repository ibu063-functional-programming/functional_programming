const filterR = (orig, fn) => {
  const filterLoop = (arr, i) =>
    arr.length === 0
      ? []
      : !(0 in arr) || arr[0] === undefined || !fn(arr[0], i, orig)
        ? filterLoop(arr.slice(1), i + 1)
        : [arr[0]].concat(filterLoop(arr.slice(1), i + 1));
        //[3].concat(filterLoop(arr.slice(1), i + 1))
       // [3].concat([]) => [3]
  return filterLoop(orig, 0);
};
[,2].filter(isOdd); // [1, 5]
const maybeNums = [1, undefined, 3, undefined, 5, 8, 9];
const isOdd = (x, i, a) => x % 2 === 1;
//[1, 2, , , 5].filter(isOdd); // [1, 5]
//[,, 2, 3].filter(isOdd); // [3]
console.log(filterR(maybeNums, isOdd)); // [1, 3, 5, 9]

const students =
 [
  {name: 'Alice', age: 33}, 
  {name: 'Bob', age: 22}, 
  {name: 'Charlie', age: 25}
]
// [{name: 'Alice', age: 33 }]

const isOlderThan30 = (age) => age > 30;

const filterRecursive = (students, fn) =>
  students.length === 0
    ? []
    : fn(students[0].age)
        ? [students[0]].concat(filterRecursive(students.slice(1), fn))
        : filterRecursive(students.slice(1), fn);

console.log(filterRecursive(students, isOlderThan30)); // [{name: 'Alice', age: 33}]


let output = [];
for(i = 0; i < students.length; i++) {
  if(isOlderThan30(students[i].age)) {
    output.push(students[i]);
  }
}
console.log(output); // [{name: 'Alice', age: 33}]