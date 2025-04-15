// ************ TASK DESCRIPTION ************

// Compose Greeting Formatter
// Create three string functions:

//  trim(str) – removes leading and trailing whitespace
//  capitalize(str) – capitalizes the first character of the string
//  addGreeting(str) – adds "Hello, " in front of the string

/*
 *  Use function composition to combine them into one function that prepares greetings.
 *
 *  For input: "   alice  " => output: "Hello, Alice"
 */


// TODO -> create functions
const trim = str => str.trim();
const capitalize = str => str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1).toLowerCase();
const addGreeting = str => `Hello, ${str}`;

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

// TODO -> create the "formatGreeting" function

const formatGreeting = compose(addGreeting, capitalize, trim);






























// Below this comment any modification is prohibited. 
module.exports = formatGreeting;