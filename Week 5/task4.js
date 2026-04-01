function unary(fn) {
    return function(...args) {
        return fn(args[0]);
    }
}
  
module.exports = unary;
