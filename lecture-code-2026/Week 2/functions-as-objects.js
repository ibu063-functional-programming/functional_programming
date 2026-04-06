const sayHello = () => "Hello!";
const sayHelloWorld = () => "Hello World!";

const executeFunction = fn => fn();
console.log(executeFunction(sayHello)); // "Hello!"
console.log(executeFunction(sayHelloWorld)); // "Hello World!"