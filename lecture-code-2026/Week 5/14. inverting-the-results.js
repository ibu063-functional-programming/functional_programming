const palabras = [
 "ñandú",
 "oasis",
 "mano",
 "natural",
 "mítico",
 "musical",
];

const spanishComparisonX = (a, b) => a.localeCompare(b, "es");
palabras.sort(spanishComparisonX);


const invert = (fn) => (...args) => -(fn(...args));
const spanishComparison = (a, b) => a.localeCompare(b, "es");
palabras.sort(spanishComparison); // "mano", "mítico", "musical", "natural", "ñandú", "oasis"
palabras.sort(invert(spanishComparison)); // "oasis", "ñandú", "natural", "musical", "mítico", "mano"
console.log(palabras)