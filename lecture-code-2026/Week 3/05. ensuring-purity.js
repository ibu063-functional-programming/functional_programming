const maxStrings2 = a => [...a].sort().pop();

function maxStrings3(a){
    let copy = [...a];
    return copy.sort().pop();
    copy.sort();
    return copy.pop();
}

let countries = [
    "Argentina",
    "Uruguay",
    "Brasil",
    "Paraguay"
];


console.log(maxStrings2(countries)); // "Uruguay"
console.log(countries); // ["Argentina", "Uruguay", "Brasil", "Paraguay"]

console.log(maxStrings2(countries)); // "Uruguay"
console.log(countries); // ["Argentina", "Uruguay", "Brasil", "Paraguay"]

console.log(maxStrings2(countries)); // "Uruguay"
console.log(countries); // ["Argentina", "Uruguay", "Brasil", "Paraguay"]
