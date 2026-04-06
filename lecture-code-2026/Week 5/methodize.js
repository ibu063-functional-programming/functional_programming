//"ABCDE".reverse(); // "EDCBA"
//"ABCDE".reverse(true); // "E-D-C-B-A"

function reverse(x, y = false) {
  return x
    .split("")
    .reverse()
    .join(y ? "-" : "");
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function methodize(obj, fn) {
 obj.prototype[fn.name] = function (...args) {
 return fn(this, ...args);
 };
}

methodize(String, reverse);

console.log("MONTEVIDEO".reverse()); // OEDIVETNOM 
console.log("MONTEVIDEO".reverse(true)); // O-E-D-I-V-E-T-N-O-M