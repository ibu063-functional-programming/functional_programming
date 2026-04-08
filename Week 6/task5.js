/*
You are given a function that formats a student record message by combining a label and a value:
const formatStudentInfo = (label, value) => `${label}: ${value}`;

Your task is to implement a generic curry function curry(fn) 
that transforms any function into its curried version.

After implementing curry, create a curried version of the student info formatter 
and use it to create specialized functions such as formatting a student's name, ID, or GPA.

Expected usage example:
console.log(formatName("Amila"));       // "Name: Amila"
console.log(formatID("20245"));         // "Student ID: 20245"
console.log(formatGPA("9.5"));          // "GPA: 9.5"

*/

const formatStudentInfo = (label, value) => `${label}: ${value}`;

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
             return function (...nextArgs) {
                return curried(...args, ...nextArgs)
             }
        }
    }
}

const curriedFormatStudioInfo = curry(formatStudentInfo);

const formatName = curriedFormatStudioInfo("Name");
const formatID = curriedFormatStudioInfo("Student ID");
const formatGPA = curriedFormatStudioInfo("GPA");


console.log(formatName("Amila"));      
console.log(formatID("20245"));         
console.log(formatGPA("9.5"));          