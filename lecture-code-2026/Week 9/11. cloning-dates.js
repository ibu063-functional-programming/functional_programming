const jsonCopy = (obj) => JSON.parse(JSON.stringify(obj));

const myDate = new Date();
const newDate = jsonCopy(myDate);
console.log(typeof myDate, typeof newDate); // object string
console.log(myDate)
console.log(newDate) 