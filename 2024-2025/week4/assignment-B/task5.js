// ************ TASK DESCRIPTION ************

// Write a function extractLastNames(names) that extracts last names 
// from an array of full names.
// If a name has multiple words, return all but the first.
// If a name has only one word, exclude it.

// USE DECLARATIVE PROGRAMMING.

//* console.log(extractLastNames(["Winston Churchill", "Plato", "Abraham Lincoln"]));
//* Output: ["Churchill", "Lincoln"]




// HINTS:
/*
* Hint 1: The .slice() method is used to extract a portion of an array or string without modifying the original data. 
* It returns a new array or substring:

            const numbers = [1, 2, 3, 4, 5];
            console.log(numbers.slice(1, 4)); // Output: [2, 3, 4]
            console.log(numbers.slice(2));    // Output: [3, 4, 5] 


* Hint2: The .join() method combines all elements of an array into a single string, separated by a specified delimiter. 
* It does not modify the original array and returns a new string:

            const fruits = ['apple', 'banana', 'orange'];
            console.log(fruits.join(', ')); // Output: 'apple, banana, orange'
*/



// TODO
const extractLastNames = (names) => 
    names
        .map(name => name.split(" "))
        .filter(parts => parts.length > 1)         
        .map(parts => parts.slice(1).join(" "));








































// Below this comment any modification is prohibited.
module.exports = extractLastNames;
