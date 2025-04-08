// ************ TASK DESCRIPTION ************

// Create a function announce(who, action) that returns "who is action"
// Then, write a function partialWho(who) that partially applies the who argument using arrow functions and returns a new function waiting for action.


// TODO

function announce(who, action) {
    return `${who} is ${action}`;
  }
  
  function partialWho(who) {
    return (action) => announce(who, action);
  }
  
  const announceAlice = partialWho("Alice");
  console.log(announceAlice("coding")); // Alice is coding
  
















// Below this comment any modification is prohibited. 
module.exports = { announce, partialWho };
