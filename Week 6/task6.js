/*
You are given a function formatDate

Create a partially applied function that always uses the year 2026.

The output for:
console.log(format2026(10, 3));

should be: 10/3/2026

*/
const formatDate = (day, month, year) => `${day}/${month}/${year}`;

const format2026 = (day, month) => formatDate(day, month, 2026);

console.log(format2026(10, 3));
