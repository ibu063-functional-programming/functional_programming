// ************ TASK DESCRIPTION ************

// Write a function countWords(sentences) that takes an array of 
// sentences and returns an array of word counts for each sentence. 
// USE DECLARATIVE PROGRAMMING.

/*
* console.log(countWords(["Hello world", "Functional programming is fun"])); // Output: [2, 4]
*/



// TODO
const countWords = (sentences) => sentences.map(sentence => sentence.split(" ").length);


















// Below this comment any modification is prohibited. 
module.exports = countWords;