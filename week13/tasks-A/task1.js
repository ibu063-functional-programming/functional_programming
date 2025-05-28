// ************ TASK DESCRIPTION ************
//? Task 1: Safely extract username

/*
* You are working with user profile data, but sometimes the data is incomplete.
* Currently, the function below throws an error if the profile is missing.
*
* Your task is to:
* - Convert getUsername into a pure function.
* - Finish and use the Maybe monad to safely handle undefined/null inputs.
* - For the Maybe monad, you need to use Just and Nothing classes which are alredy defined for you (at the end of the file).
*
* - You may assume every profile object has: { username }
*
* Requirements:
* - Purify the getUsername function
* - Use: Maybe.of(value)
*/

class Maybe {
  static of(x) {
    return x===null || x===undefined ? new Nothing() : new Just(x);
  }
}

function getUsername(profile) {
  return Maybe.of(profile)
    .map(p => p.username)
    .map(username => username.toUpperCase());
}


// ? OTHER MONADS (Just and Nothing) DEFINED BELOW
// Below this comment any modification is prohibited.

class Just {
    constructor(value){
        this.value = value;
    }
    map(fn) {
        return Maybe.of(fn(this.value));
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


module.exports = { getUsername };