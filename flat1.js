const a = [[1, 2], [3, 4, [5, 6, 7]], 8, [[[9]]]];

console.log(a.flat()); // or a.flat(1)
// Output: [ 1, 2, 3, 4, [ 5, 6, 7 ], 8, [ [ 9 ] ] ]

console.log(a.flat(2));
// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9 ] ]

console.log(a.flat(Infinity));
// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

