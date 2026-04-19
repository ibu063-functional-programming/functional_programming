// Getter: retrieves the value of a property
const getField = (attr) => (obj) => obj[attr];

// Setter: immutably sets a value on a property
const setField = (attr) => (value) => (obj) => ({
  ...obj,
  [attr]: value,
});

// Lens constructor: combines a getter and setter
const lens = (getter, setter) => ({
  getter,
  setter,
});

// Create a lens for a specific property
const lensProp = (attr) => lens(getField(attr), setField(attr));

const user = { name: "Alice", age: 30 };

const nameLens = lensProp("name");

const getName = nameLens.getter;
const setName = nameLens.setter;

console.log(getName(user)); // "Alice"

const updatedUser = setName("Bob")(user);
console.log(updatedUser);   // { name: "Bob", age: 30 }
console.log(user);      // { name: "Alice", age: 30 } - original unchanged


