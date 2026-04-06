// Named function declaration
function first(x) {
    return x * 2;
}

// Anonymous function expression
const second = function(x) {
    return x * 2;
};

// Named function expression
const third = function someName(x) {
    return x * 2;
};

// Immediately invoked function expression (IIFE)
const fourth = (function() {
    return function(x) { return x * 2; };
})();

// Function constructor (Unsafe! Avoid this)
const fifth = new Function("x", "return x * 2;");

// Arrow function
const sixth = x => x * 2;