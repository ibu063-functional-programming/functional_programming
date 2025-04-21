// Constant functor used for viewing values (read-only)
class Constant {
  constructor(value) {
    this.value = value;
  }
  map(_) {
    return this; // map does nothing
  }
}

// Lens constructor for a property
const lensProp = (key) => (fn) => (obj) =>
  fn(obj[key]).map((val) => ({ ...obj, [key]: val }));

// Compose two lenses
const compose = (outer, inner) => (fn) =>
  outer((innerObj) => inner(fn)(innerObj));

// View operation using Constant functor
const view = (lens) => (obj) =>
  lens((x) => new Constant(x))(obj).value;

// Sample nested object
const user = {
  profile: { name: "Eva", age: 30 },
};

// Compose lens to focus on profile.name
const nameLens = compose(lensProp("profile"), lensProp("name"));

// Use view to extract the nested value
console.log(view(nameLens)(user)); // Output: "Eva"
