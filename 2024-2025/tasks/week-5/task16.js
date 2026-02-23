/*
Field Extractor
Create getField(f) to extract properties from objects.
Use it with map() to get latitudes and longitudes from an array of location objects.
*/
const getField = (f) => (obj) => obj[f];

// Example
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const names = people.map(getField("name"));
console.log("Names:", names); // ["Alice", "Bob"]

