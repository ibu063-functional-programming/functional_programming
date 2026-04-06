function curry(fn) {
    return fn.length === 0 ? fn() : (x) => curry(fn.bind(null, x));
}

const make3 = (a, b, c) => `${a}:${b}:${c}`;
// f1 is the curried version of make3
const f1 = curry(make3);
// f2 is a function that will fix make3's 1st parameter
const f2 = f1("A");
// f3 is a function that will fix make3's 2nd parameter
const f3 = f2(2);
// "A2Z" will be now calculated, since we are providing
// the 3rd (last) make3's parameter
const f4 = f3("Z");
console.log(f4);


const f2b = f1("TEA")(4);
const f3b = f2b("TWO");
// "TEA:4:TWO"
const f1c = f1("IN")(10)("TION");
console.log(f3b);
console.log(f1c);
// "IN":10:"TION"