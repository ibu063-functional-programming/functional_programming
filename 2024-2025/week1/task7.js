// Explicitly typed variables
let username = "Sena";
let age = 25;
let isStudent = true;

// Typed arrays
let scores = [95, 88, 76, 100];
let names = ["Ismet", "Osman", "Sanela"];

// Object with specific property types
let person = {
    name: "Zeko Populic",
    age: 30,
    isEmployed: true
};

// Loop with explicit index type
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

// Using a typed array method
let doubledScores = scores.map((score) => score * 2);
console.log("Doubled Scores:", doubledScores);

// Function returning a boolean
function isAdult(age) {
    return age >= 18;
}
console.log(`Is ${person.name} an adult?`, isAdult(person.age));

// Destructuring with explicit types
let { name, age: personAge } = person;
console.log(`Extracted Name: ${name}, Age: ${personAge}`);

// Tuple (fixed-length array with different types)
let coordinates = [40.7128, -74.0060];
console.log(`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`);
