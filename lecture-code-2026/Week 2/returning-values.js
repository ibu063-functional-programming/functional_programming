const square = x => x * x;
console.log(square(4)); // 16

const multiply = (x, y) => { 
    x = x + 1; // This does not affect the returned value
    return x * y; 
};
console.log(multiply(3, 4)); // 12

const getUser = (name, age) => ({ 'name':name, 'age': age });
console.log(getUser()); // { name: undefined, age: undefined }
console.log(getUser("Alice", 30)); // { name: 'Alice', age: 30 }