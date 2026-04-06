if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}


console.log("Hello World".includes("World")); // true
console.log("Hello World".includes("world")); // false (case-sensitive)
console.log("JavaScript".includes("Script", 4)); // true
console.log("JavaScript".includes("Script", 5)); // false (search starts after "Script")
