/*
Create an arrow function that takes an array of strings 
and returns a new array of the length of each string. 
*/

const stringsToLength = (strings) => {
    let newArray = [];
    for (let i = 0; i < strings.length; i++) {
        newArray.push(strings[i].length);
    }
    return newArray;
}
console.log(stringsToLength(["Hello", "World", "JavaScript"])); // [5, 5, 10]

const stringsToLengthForOf = (strings) => {
    let lengths = [];
    for (let s of strings) {
        lengths.push(s.length);
    }
    return lengths;
}
console.log(stringsToLengthForOf(["Hello", "World", "JavaScript"])); // [5, 5, 10]