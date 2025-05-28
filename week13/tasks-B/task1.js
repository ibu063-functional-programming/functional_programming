// ************ TASK DESCRIPTION ************
//? Task 1: Safely extract domain from email

/*
* You are working with user contact data, but sometimes emails are missing or malformed.
* Currently, the function below throws an error if the email is missing or invalid.
*
* Your task is to:
* - Convert getEmailDomain into a pure function.
* - Finish and use the Maybe monad to safely handle undefined/null or bad inputs.
*
* Requirements:
* - Purify the getEmailDomain function
* - Use: Maybe.of(value), Just(x), Nothing()
*/

class Maybe {
  static of(x) {
    return x === null || x === undefined ? new Nothing() : new Just(x);  }
}

function getEmailDomain(user) {
  return Maybe.of(user)
    .map(u => u.email)
    .chain(email => email && email.includes('@') ? new Just(email) : new Nothing())
    .map(email => email.split('@')[1].toLowerCase());
}


// ? OTHER MONADS (Just and Nothing) DEFINED BELOW
// Below this comment any modification is prohibited.

class Just {
    constructor(value){
        this.value = value;
    }
    map(fn) {
        return new Just(fn(this.value));
    }

    chain(fn) {
        return fn(this.value);
    }

    unwrap() {
        return this.value;
    }

    toString() {
        return `Just(${this.value})`;
    }
}

class Nothing {
    map(_) {
        return this;
    }
    chain(_) {
        return this;
    }
    unwrap() {
        return null;
    }
    toString() {
        return `Nothing`;
    }
}


console.log(getEmailDomain({ email: "user@example.com" }).toString()); // Just(example.com)
console.log(getEmailDomain({ email: null }).toString());               // Nothing
console.log(getEmailDomain({}).toString());                            // Nothing
console.log(getEmailDomain(null).toString());                          // Nothing

module.exports = { getEmailDomain };