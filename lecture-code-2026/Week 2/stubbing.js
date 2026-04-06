let DEVELOPMENT = false
const myLog = DEVELOPMENT
  ? (someText) => console.log(someText) 
  : (someText) => {};
  if(DEVELOPMENT) {
    (someText) => console.log(someText) 
  } else {
    (someText) => { } 
  }
if(1 % 2 === 0) {
    console.log('even');
} else if(2 % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
const result = 1 % 2 === 0 ? 'even' : 2%2 === 0 ? 'even' : 'odd';
const result2 = 2 % 2 === 0 ? 'even' : 'odd';
console.log(result); // 'odd'
console.log(result2); // 'even'
console.log(myLog('test'))

