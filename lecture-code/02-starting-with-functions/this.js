function ShowNameWrong(name) {
    this.name = name;
    setTimeout(function() {
        console.log(this.name); // Undefined!
    }, 1000);
}
person = new ShowNameWrong("Alice");


function ShowName(name) {
  this.name = name;
  const that = this;
  setTimeout(function () {
    console.log(that.name);
  }, 1000);

  setTimeout(
    function () {
      console.log(this.name);
    }.bind(this),
    2000,
  );

  setTimeout(() => {
    console.log(this.name);
  }, 3000);
}
const person = new ShowName("Alice");
// after one second, "Alice"
// after another second, the same
// after yet another second, once again