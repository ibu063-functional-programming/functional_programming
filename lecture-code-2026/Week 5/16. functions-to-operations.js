const mySum = (arr) => arr.reduce( (x, y) => x + y, 0 );
const myProd = (arr) => arr.reduce( (x, y) => x * y, 1 );
const mySum2 = (arr) => arr.reduce(binaryOp1("+"), 0);
const myProd2 = (arr) => arr.reduce(binaryOp1("*"), 1);


const binaryOp1 = (op) => {
  switch (op) {
    case "+":
      return (x, y) => x + y;
    case "-":
      return (x, y) => x - y;
    case "*":
      return (x, y) => x * y;
    //
    // etc.
    //
    default:
      throw new Error(`Unknown ${op} operator`);
  }
};

console.log(mySum2([1, 2, 3, 4]));
console.log(myProd2([1, 2, 3, 4]));