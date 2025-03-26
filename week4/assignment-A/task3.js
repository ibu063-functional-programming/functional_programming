// ************ TASK DESCRIPTION ************

// Given an array of account objects, write a function filterNegativeBalances(accounts)
// that returns an array containing only accounts with a negative balance.
// USE DECLARATIVE PROGRAMMING. 

/*
* const accounts = [
*     { id: "A1", balance: 100 },
*     { id: "B2", balance: -50 },
*     { id: "C3", balance: -30 }
* ];
* console.log(filterNegativeBalances(accounts)); 
*
*/


// TODO
const filterNegativeBalances = (accounts) => accounts.filter(account => account.balance < 0);



















// Below this comment any modification is prohibited. 
module.exports = filterNegativeBalances;