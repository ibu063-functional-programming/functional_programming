const maxStrings2 = a => [...a].sort().pop();

let countries = [
    "Argentina",
    "Uruguay",
    "Brasil",
    "Paraguay"
];

console.log(maxStrings2(countries)); // "Uruguay"
console.log(countries); // ["Argentina", "Uruguay", "Brasil", "Paraguay"]

