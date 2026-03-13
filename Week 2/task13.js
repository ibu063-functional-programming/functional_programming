/*
Check if Array.prototype.first exists. If not, define it so that:
[1, 2, 3].first(); // 1
*/

if (!Array.prototype.first) {
    Array.prototype.first = function() {
        return this[0];
    }
}

console.log([1, 2, 3].first()); // 1