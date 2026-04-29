const deepFreeze = (obj) => {
  if (
    obj &&
    typeof obj === "object" &&
    !Object.isFrozen(obj)
  ) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) =>
      deepFreeze(obj[prop])
    );
  }
  return obj;
};

const person = {
  name: "Alice",
  address: { city: "Paris", zip: 75000 },
};

deepFreeze(person);
person.address.city = "London";
console.log(person.address.city); // Output: "Paris"

