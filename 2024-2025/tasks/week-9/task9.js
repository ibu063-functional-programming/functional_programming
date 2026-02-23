// Variable functor for over()
class Variable {
  constructor(value) {
    this.value = value;
  }
  map(fn) {
    return new Variable(fn(this.value));
  }
}

// Lens constructor for accessing properties
const lensProp = (key) => (fn) => (obj) =>
  fn(obj[key]).map((val) => ({ ...obj, [key]: val }));

// Compose lenses
const compose = (outer, inner) => (fn) =>
  outer((innerObj) => inner(fn)(innerObj));

// over: transform a value immutably using a lens
const over = (lens) => (fn) => (obj) =>
  lens((x) => new Variable(fn(x)))(obj).value;

// Example nested object
const user = {
  profile: { name: "Eva", age: 30 },
};

// Create a composed lens for profile.name
const nameLens = compose(lensProp("profile"), lensProp("name"));

// Use over to uppercase the name immutably
const updatedUser = over(nameLens)((x) => x.toUpperCase())(user);

console.log(updatedUser);
// Output:
// {
//   profile: { name: "EVA", age: 30 }
// }

console.log(user);
// Original object remains unchanged:
// {
//   profile: { name: "Eva", age: 30 }
// }
