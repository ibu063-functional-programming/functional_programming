const original = { name: "Bob", meta: { age: 32 } };
const clone = JSON.parse(JSON.stringify(original));
clone.meta.age = 100; // doesn't affect original
console.log(clone)
console.log(original)