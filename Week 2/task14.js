// Write a polyfill for String.prototype.startsWith. Do not use the built-in startsWith.

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString) {
    return this.slice(0, searchString.length) === searchString;
    }
}
console.log("Hello, world!".startsWith("Hello")); // true

