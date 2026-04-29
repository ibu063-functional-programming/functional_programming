const myObj = { d: 22, m: 9 };
console.log(myObj); // {d: 22, m: 9}
myObj = { d: 12, m: 4 }; // Uncaught TypeError: Assignment to constant variable.
myObj.d = 12; // but this is fine!
myObj.m = 4;
console.log(myObj); // {d: 12, m: 4}