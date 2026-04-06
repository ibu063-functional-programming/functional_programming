greet();  // Works fine, even though function is defined later

function greet() {
    console.log("Hello, World!");
}

// However, this will not work because variable declarations are hoisted but not their assignments
console.log(message);  // Outputs: undefined
var message = "This is a hoisted variable.";

// Using let or const will not allow hoisting
console.log(greeting );  // ReferenceError: Cannot access 'greeting' before initialization   