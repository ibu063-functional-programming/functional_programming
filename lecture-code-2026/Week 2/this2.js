const person = {
  name: "Alice",
  greet: function() {
    console.log(this.name); // "Alice"
  }
};
const person2 = {
  name: "Bob",
  greet: function() {
    console.log(this.name); // "Bob"
  }
};
person.greet();
person2.greet();