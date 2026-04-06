const demethodize1 =
 (fn) =>
 (arg0, ...args) =>
 fn.apply(arg0, args);

const demethodize2 =
 (fn) =>
 (arg0, ...args) =>
 fn.call(arg0, ...args);

const demethodize3 =
 (fn) =>
 (arg0, ...args) =>
 fn.bind(arg0, ...args)();

const sort = demethodize1(Array.prototype.sort);
const a = ["delta", "alfa", "beta", "gamma", "epsilon"];
const b = sort(a);
console.log(a, b);
// [ 'alfa', 'beta', 'delta', 'epsilon', 'gamma' ] twice!