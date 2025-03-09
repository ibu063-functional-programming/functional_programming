let DEVELOPMENT = false
const myLog = DEVELOPMENT
  ? (someText) => console.log(someText)
  : (someText) => {};

console.log(myLog('test'))