const person = {
  name: "Alice",
  address: { city: "Paris", zip: 75000 },
};

const deepFreeze = (obj) => {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      deepFreeze(obj[prop]);
    });
  }
  return obj;
};

deepFreeze(person);
person.address.city = "London"; // Should this work?

console.log(person)
//In strict mode, JavaScript does not silently ignore attempts to modify frozen properties - 
//it throws a TypeError instead.

