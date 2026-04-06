function someFunction(param1, param2, param3) {
 // do something
 // do something else
 // and a bit more,
 // and finally
 return "some expression"
}

function someFunction(param1, param2, param3) {
 console.log(
 "entering someFunction: ",
 param1,
 param2,
 param3
 );
 // do something
 // do something else
 // and a bit more,
 // and finally
 const auxValue = "...some expression...";
 console.log("exiting someFunction: ", auxValue);
 return auxValue;
}

function addLogging(fn) {
    return (...args) => {
    console.log(`entering ${fn.name}(${args})`);
    const valueToReturn = fn(...args);
    console.log(`exiting ${fn.name}=>${valueToReturn}`);
    return valueToReturn;
 }
}


function subtract(a, b) {
  if (b === 0) {
    throw new Error("We don't subtract zero!");
  } else {
    b = changeSign(b);
    return a + b;
  }
}

let changeSign = (a) => -a;
// Wrap functions with logging
let subtract2 = addLogging(subtract);
subtract2(8, 3)
console.log(subtract(8, 3));
console.log(); // to separate
changeSign = addLogging(changeSign);
subtract(7, 5);

