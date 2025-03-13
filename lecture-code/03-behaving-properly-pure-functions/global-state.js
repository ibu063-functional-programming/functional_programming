const limitYear = 2004; // only good for 2022!
const isOldEnough = function (birthYear) {
    return birthYear <= limitYear;
};

console.log(isOldEnough(1960)); // true
console.log(isOldEnough(2010)); // false