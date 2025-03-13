const maxStrings = a => a.sort().pop();

const countries = [
    "Argentina",
    "Uruguay",
    "Brasil",
    "Paraguay"
];

console.log(maxStrings(countries)); // "Uruguay"

console.log(countries); // ["Argentina", "Brasil", "Paraguay"]

