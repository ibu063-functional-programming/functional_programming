const sum3 = (x, y, z) => x + y + z;
console.log(sum3(1, 2, 3)); // 6

const curriedSum = x => 
    y => 
        z => x + y + z;
console.log(curriedSum(1)(2)(3)); // 6

const add5 = curriedSum(5);
/*const add5 = y => 
        z => 5 + y + z;
*/
const add5And2 = add5(2);
//const add5And2 = z => 5 + 2 + z;
add5And2(3)
const add5and22 = curriedSum(5)(2);
console.log(add5And2(3)); // 10
console.log(add5(10)(3)); // 18
console.log(add5(11)(12)); // 28 

const pdv = x => 
    y => x/100 * y;

const housepdv = pdv(21);
const carpdv = pdv(12);
const foodpdv = pdv(5);

let housePriceCarsija = 100000;
console.log(housepdv(housePriceCarsija));
//pdv(21)(housePriceCarsija);
let housePriceIlidza = 150000;
//pdv(21)(housePriceIlidza);
console.log(housepdv(housePriceIlidza));

let carPriceMercedes = 50000;
console.log(carpdv(carPriceMercedes));
let carPriceBMW = 40000;
console.log(carpdv(carPriceBMW));

let foodPriceBread = 2;
console.log(foodpdv(foodPriceBread));
let foodPriceMilk = 3;
console.log(foodpdv(foodPriceMilk));