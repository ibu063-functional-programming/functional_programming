function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const double = x => x * 2;
const addThree = x => x + 3;

const doubleThenAdd = compose(addThree, double); // addThree(double(x))
console.assert(doubleThenAdd(4) === 11, "Test Failed: Expected 11");
console.log("Test Passed: doubleThenAdd(4) = 11");
