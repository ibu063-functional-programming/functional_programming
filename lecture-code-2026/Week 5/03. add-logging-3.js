function addLogging3(fn, logger = console.log) {
  return function(...args) {
    logger(`entering ${fn.name}(${args})`);
    try {
      const valueToReturn = fn(...args);
      logger(`exiting ${fn.name} => ${valueToReturn}`);
      return valueToReturn;
    } catch (thrownError) {
      logger(`exiting ${fn.name} => threw ${thrownError}`);
      throw thrownError;
    }
  };
}


function subtract(a, b) {
  if (b === 0) {
    throw new Error("We don't subtract zero!");
  } else {
    b = changeSign(b);
    return a + b;
  }
}
function customLogger() {
  console.log('hellooooooo');
}
let changeSign = (a) => -a;
subtract = addLogging3(subtract);
subtract(8, 3);
console.log(); // to separate
//changeSign = addLogging3(changeSign);
//subtract(7, 5);