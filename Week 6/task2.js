/*
Create a curried version of this function addTaxCurried and use it 
to create a specialized function. Assume the national tax rate is 10%. 
Here is the example usage:
addNationalTax(200) 

The output should be: 220.00000000000003

*/
const addTax = (rate, amount) => amount * (1 + rate / 100);

const addTaxCurried = rate => amount => amount * (1 + rate / 100);

const nationalRate = 10;

const addNationalTax = addTaxCurried(nationalRate);

console.log(addNationalTax(200));
