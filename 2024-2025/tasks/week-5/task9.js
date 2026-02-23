/*
Logical Negation
Write not(fn) that negates a predicate.
Use it to filter non-negative balances from an array of accounts.
*/
// Logical negation HOF
const not = (fn) => (...args) => !fn(...args);

// Sample data
const accounts = [
  { id: "A1", balance: 500 },
  { id: "A2", balance: -150 },
  { id: "A3", balance: 0 },
  { id: "A4", balance: -20 },
  { id: "A5", balance: 3000 },
];

// Predicate: is balance negative?
const isNegativeBalance = (acc) => acc.balance < 0;

// Use `not()` to get non-negative balances
const nonNegativeAccounts = accounts.filter(not(isNegativeBalance));

// Output result
console.log("Non-negative accounts:", nonNegativeAccounts);

//Output
/*
Non-negative accounts: [
  { id: 'A1', balance: 500 },
  { id: 'A3', balance: 0 },
  { id: 'A5', balance: 3000 }
]
*/

