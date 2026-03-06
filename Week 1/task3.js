/*
Create a function loginCheck that takes 2 strings as parameters - username and password. 
If the username is “admin” and password “admin1234” 
return “Access granted”, otherwise return “Access denied”.
*/
function loginCheck (username, password) {
    if (username === 'admin' && password === 'admin1234') {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

const loginCheckArrow = (username, password) => (username === 'admin' && password === 'admin1234' ? "Access granted" : "Access denied");

console.log(loginCheck('admin', 'admin1234')); // Access granted
console.log(loginCheck('admin', 'wrongpassword')); // Access denied

