const makeMessage = (a, b, c) => `${a}-${b}-${c}`;

//Rewrite this function in curried form so that it can be called like this:
//makeMessageCurried("A")(2)("Z")
//Your function should return a chain of unary functions: A-2-Z

const makeMessageCurried = a => b => c => `${a}-${b}-${c}`;

function makeMessageCurried1(a) {
    return function (b) {
        return function (c) {
            return `${a}-${b}-${c}`;
        }
    }
}

console.log(makeMessageCurried("A")(2)("Z"));
console.log(makeMessageCurried1("A")(2)("Z"));