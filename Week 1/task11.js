/*
Create an arrow function that takes an array of names 
and returns a new array where each name starts with a capital letter. 
*/

const capitalizeNames = (names) => {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        newArray.push(capitalized);
    }
    return newArray;    
}

console.log(capitalizeNames(["john", "jane", "doe"])); // ["John", "Jane", "Doe"]