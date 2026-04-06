const limitYear = 2004; // only good for 2022!

const isOldEnough = function (birthYear) {
    return birthYear <= limitYear;
};
console.log('isOldEnough'); 
console.log(isOldEnough(1960)); // true
console.log(isOldEnough(2010)); // false
console.log(isOldEnough(2005)); // ??


const isOldEnough2 = birthYear => 
        birthYear <= new Date().getFullYear() - 18;
console.log('isOldEnough2'); 
console.log(isOldEnough2(1960)); // true
console.log(isOldEnough2(2010)); // false
console.log(isOldEnough2(2005)); // ??

const isOldEnough3 =
    (birthYear, currentYear) =>
        birthYear <= currentYear - 18;
console.log('isOldEnough3'); 
console.log(isOldEnough3(1960, 2026)); // true
console.log(isOldEnough3(2010, 2026)); // false
console.log(isOldEnough3(2005, 2026)); // ??