(function () {
  function ready() {
    console.log("ready");
  }
  function set() {
    console.log("set");
  }
  function go() {
    console.log("go");
  }
  ready();
  set();
  go();
})();

function set() {
  console.log("UNEXPECTED...");
}

//ready();
set()
// "ready"
// "set"
// "go"