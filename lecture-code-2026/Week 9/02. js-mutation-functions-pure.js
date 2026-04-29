const maxStrings2 = (a) => [...a].sort().pop();
const maxStrings3 = (a) => a.slice().sort().pop();

const countries = [
  "Argentina",
  "Uruguay",
  "Brasil",
  "Paraguay",
];

console.log(maxStrings2(countries)); // "Uruguay"
console.log(maxStrings3(countries)); // "Uruguay"
console.log(countries); 
// ["Argentina", "Uruguay", "Brasil", "Paraguay"] // unchanged