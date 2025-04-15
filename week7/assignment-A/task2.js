// ************ TASK DESCRIPTION ************

// Compose URL Formatter
// Create three string functions:

//  removeProtocol(str) – removes http:// or https:// if present
//  toLowerCase(str) – converts the string to lowercase
//  addWWW(str) – adds www. at the beginning of the string

/*
 *  Use function composition to combine them into one function that prepares URLs for display.

 *  For input: "https://functionalProgramming.com" => output: "www.functionalprogramming.com"
*/


// TODO -> create functions

const removeProtocol = str => str.replace(/^https?:\/\//, '');
const toLowerCase = str => str.toLowerCase();
const addWWW = str => 'www.' + str;

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x); // ovo stoji, ostalo dopune

// TODO -> create the "formatURL" function
const formatURL = compose(addWWW, toLowerCase, removeProtocol);

console.log(formatURL("https://functionalProgramming.com"));

































// Below this comment any modification is prohibited. 
module.exports = formatURL;