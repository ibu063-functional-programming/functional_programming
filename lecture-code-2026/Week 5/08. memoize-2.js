function memoize2(fn) {
  if (fn.length === 1) {
    const cache = {};
    return function (x, ...y) {
      return x in cache ? cache[x] : (cache[x] = fn(x));
    };
  } else {
    return fn;
  }
}

var a = [1, 5, 3, 8, 7, 4, 6];
String(a); // "1,5,3,8,7,4,6"
var b = [[1, 5], [3, 8, 7, 4, 6]];
String(b); // "1,5,3,8,7,4,6"
var c = [[1, 5, 3], [8, 7, 4, 6]];
String(c); // "1,5,3,8,7,4,6"


var d = {a: "fk"};
String(d); // "[object Object]"
var e = [{p: 1, q: 3}, {p: 2, q: 6}];
String(e); // "[object Object],[object Object]"

var a = [1, 5, 3, 8, 7, 4, 6];
JSON.stringify(a); // "[1,5,3,8,7,4,6]"
var b = [[1, 5], [3, 8, 7, 4, 6]];
JSON.stringify(b); // "[[1,5],[3,8,7,4,6]]"
var c = [[1, 5, 3], [8, 7, 4, 6]];
JSON.stringify(c); // "[[1,5,3],[8,7,4,6]]"
var d = {a: "fk"}; JSON.stringify(d); // "{"a":"fk"}"
var e = [{p: 1, q: 3}, {p: 2, q: 6}];
JSON.stringify(e); // "[{"p":1,"q":3},{"p":2,"q":6}]"

