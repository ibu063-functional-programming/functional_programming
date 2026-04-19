"use nonstrict"; 
const myObj2 = { d: 22, m: 9 };
console.log(myObj2); // {d: 22, m: 9}
Object.freeze(myObj2);
myObj2.d = 12; // won't have effect...
myObj2.m = 4;
console.log(myObj2); // Object {d: 22, m: 9}