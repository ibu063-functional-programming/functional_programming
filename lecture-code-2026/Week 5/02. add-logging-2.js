function addLogging2(fn) {
  return function(...args) {
    console.log(`entering ${fn.name}(${args})`);
    try {
      const valueToReturn = fn(...args);
      console.log(`exiting ${fn.name} => ${valueToReturn}`);
      return valueToReturn;
    } catch (thrownError) {
      console.log(`exiting ${fn.name} => threw ${thrownError}`);
      throw thrownError;
    }
  };
}

function subtract2(a, b) {
  if (b === 0) {
    throw new Error("We don't subtract zero!");
  } else {
    b = changeSign(b);
    return a + b;
  }
}

let changeSign = (a) => -a;

try {
 subtract2(11, 0);
} catch (e) {
 /* nothing */
}

subtract2 = addLogging2(subtract2);
subtract2(11, 0);
try { subtract2(11, 0);
} catch (e) {
console.log("caught error: ", e);
}

/*
entering subtract(11,0)
exiting subtract=>threw Error: We don't subtract zero!
*/

