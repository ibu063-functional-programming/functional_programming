"use strict";

// Function without return type
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}

// Function with return type
function square(num: number): number {
    return num * num;
}

// Function with default parameter
function multiplyNumbers(a: number, b: number = 2): number {
    return a * b;
}

// Function with optional parameter
function introduce(firstName: string, lastName?:string): string {
    if (lastName) {
        return "Hello, my name is ${firstName} ${lastName}.";
    }
    return "Hello, my name is ${firstName}.";
}

// Function with rest parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

