// ************ TASK DESCRIPTION ************

// Create a function sayHi(name, language) that returns a greeting message like:
// "Hi NAME!" (English), "Hola NAME!" (Spanish), or "Salut NAME!" (French).
// Then, write a curried function hiIn(lang) that fixes the language and returns another function waiting for the name.

/*
* const inFrench = hiIn("French");
* console.log(inFrench("Nina")); // "Salut Nina!"
*/


// TODO

function sayHi(name, language) {
    switch (language) {
      case "Spanish":
        return `Hola ${name}!`;
      case "French":
        return `Salut ${name}!`;
      default:
        return `Hi ${name}!`;
    }
  }
  
  function hiIn(lang) {
    return function(name) {
      return sayHi(name, lang);
    };
  }




// Below this comment any modification is prohibited. 
module.exports = { sayHi, hiIn };
