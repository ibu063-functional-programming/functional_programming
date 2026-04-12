const pipelineR = (...fns) =>
  fns.length === 1
    ? fns[0]
    : (...args) => pipelineR(...fns.slice(1))(fns[0](...args));

const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const piped = pipelineR(addOne, square, double);
console.log(piped(2)); // double(square(addOne(2))) = double(9) = 18

const plus1 = x => x + 1;
const by10 = x => x * 10;
const result = pipelineR(
  by10,
  plus1,
  plus1,
  plus1,
  by10,
  plus1,
  by10,
  by10,
  plus1,
  plus1,
  plus1
)(2);
console.log(result); // 23103