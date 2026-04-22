const mapR = (arr, fn) =>
  arr.length === 0
    ? []
    : [fn(arr[0])].concat(mapR(arr.slice(1), fn));
  
const aaa = [1, 2, 4, 5, 7];
const timesTen = x => x * 10;

console.log(aaa.map(timesTen));    // [10, 20, 40, 50, 70]
console.log(mapR(aaa, timesTen));  // [10, 20, 40, 50, 70]

/*
[timesTen(1)].concat(mapR([2, 4, 5, 7], timesTen))
[timesTen(1), timesTen(2)].concat(mapR([4, 5, 7], timesTen))  
[timesTen(1), timesTen(2), timesTen(4)].concat(mapR([5, 7], timesTen))
[timesTen(1), timesTen(2), timesTen(4), timesTen(5)].concat(mapR([7], timesTen))
[timesTen(1), timesTen(2), timesTen(4), timesTen(5), timesTen(7)].concat(mapR([], timesTen))
[timesTen(1), timesTen(2), timesTen(4), timesTen(5), timesTen(7)].concat([])
[10, 20, 40, 50, 70]
*/