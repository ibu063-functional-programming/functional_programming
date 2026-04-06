const myGet = () => performance.now();

const myPut = (text, name, tStart, tEnd) => {
  console.log(`${name} - ${text} ${tEnd - tStart} ms`);
};

const myLogger = {
  getTime: myGet,
  output: myPut,
};

function addTiming(fn, { getTime = myGet, output = myPut } = {}) {
  return function (...args) {
    const tStart = getTime();
    try {
      const valueToReturn = fn(...args);
      output("normal exit", fn.name, tStart, getTime());
      return valueToReturn;
    } catch (thrownError) {
      output("exception!!", fn.name, tStart, getTime());
      throw thrownError;
    }
  };
}

// Original functions
function subtract(a, b) {
  return a - b;
}

let changeSign = function (x) {
  return -x;
};

// Wrap with timing
let subtract2 = addTiming(subtract, myLogger);
console.log(subtract2(8, 3));
console.log(subtract(8, 3));

console.log(); // to separate

changeSign = addTiming(changeSign, myLogger);
changeSign(4);

subtract(7, 5);