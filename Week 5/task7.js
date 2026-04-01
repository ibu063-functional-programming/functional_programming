function calculateBonus(points) {
    return points * 5;
}

function memoizeWithTracker(fn) {
    const cache = {};   
    //const tracker = { cached: 0, computed: 0 };
   

    const memoized = function (n) {
        if (n in cache) {
            memoized.tracker.cached++;
            return cache[n];
        } else {
            memoized.tracker.computed++;
            cache[n] = fn(n)
            return cache[n];
        }
    }
    memoized.tracker = { cached: 0, computed: 0 };
    return memoized;
}
const memoBonus = memoizeWithTracker(calculateBonus);
console.log(memoBonus(10)); // computed
console.log(memoBonus(10)); // cached
console.log(memoBonus.tracker);

module.exports = memoizeWithTracker;