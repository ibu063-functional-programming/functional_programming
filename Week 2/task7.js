/*
Using currying, create a function addTax:
First function takes taxRate
Second function takes price
Returns the final price
const addVAT = addTax(0.17);
addVAT(100); // 117
*/

const addTax = taxRate => price => price + (price * taxRate);

const addVAT = addTax(0.17);

console.log(addVAT(100)); // 117


// The other way to solve this task:

function newAddTax(taxRate) {
    return function (price) {
        return price + (price * taxRate);
    }
}

console.log(newAddTax(0.17)(100)); // 117