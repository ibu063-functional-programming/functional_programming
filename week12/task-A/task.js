// ************ TASK DESCRIPTION ************
//? Robust Functional Form Processor
/*
*   In this assignment, you will build a fully functional form processor that uses
*   functional error handling concepts: Maybe, Either, Try, and AsyncTry.
*
*   Your processor must:
*   - Extract optional fields safely using the Maybe monad
*   - Validate inputs using the Either monad
*   - Safely parse risky values using Try
*   - Submit the form using an async-safe AsyncTry handler
*
*   You must implement and use the following monads:
*
*   MAYBE MONAD
*   - Maybe.of(x) → Just(x) if x is not null/undefined, otherwise Nothing()
*   - Just(x):
*       - .map(fn) → transforms the value and wraps in Just again
*       - .chain(fn) → flatMaps and avoids nesting
*       - .unwrap() → returns raw value
*       - .toString() → Just(value)
*   - Nothing():
*       - .map(fn) → returns itself
*       - .chain(fn) → returns itself
*       - .unwrap() → returns null
*       - .toString() → "Nothing"
*
*   EITHER MONAD
*   - Either.of(left, right): returns Left(left) if right is null/undefined, otherwise Right(right)
*   - Left(x):
*       - .map(fn), .chain(fn) → return itself
*       - .fold(errFn, _) → calls errFn(x)
*       - .toString() → Left(x)
*   - Right(x):
*       - .map(fn), .chain(fn) → apply fn and wrap in Right
*       - .fold(_, successFn) → calls successFn(x)
*       - .toString() → Right(x)
*
*   TRY MONAD
*   - Try.of(() => riskyExpr, msg) → returns Either:
*       - Right(value) if no error
*       - Left(msg) if error occurs
*
*   ASYNCTRY MONAD
*   - AsyncTry.of(asyncFn, msg) → returns a Promise of:
*       - Right(result) if successful
*       - Left(msg) if rejected or exception
*


*   REQUIRED UTILITIES:
*
*   - getOptional(key)
*       - A higher-order function that takes a key and returns a function expecting an object.
*       - When passed an object (e.g. formData), it safely retrieves the value under the key
*         and returns a Maybe (Just if found, Nothing if not).
*
*   - validateEmail(email)
*       - Validates the format of an email using regex (regex within if statement provided).
*       - Returns Right(email) if valid, or Left("Invalid email") otherwise.
*
*   - validatePassword(password)
*       - Checks that the password is defined and has at least 6 characters.
*       - Returns Right(password) if valid, or Left("Password too short") otherwise.
*
*   - parseAge(value)
*       - Attempts to parse the input string into an integer using Try.of().
*       - Returns Right(number) if successful, or Left("Invalid number") if parsing fails.
*
*   - checkAge(age)
*       - Checks that the age is >= 18.
*       - Returns Right(age) if valid, or Left("Too young") if underage.
*
*   - Main Function: processForm(formData, sendToAPI)
*       - Extracts 'email', 'password', and 'age' fields using getOptional and Maybe.
*       - Validates fields using Either and Try monads.
*       - If all checks pass, logs a success message.
*       - Uses AsyncTry to safely call the async sendToAPI function and logs the result.
*
*   Your final processor must demonstrate:
*       - Safe optional field handling (Maybe)
*       - Chained validation logic (Either)
*       - Risk-managed parsing (Try)
*       - Async error-safe submission (AsyncTry)
*
*? Example usage:
*? getOptional("email")({ email: "a@b.com" }) → Just("a@b.com")
*? validateEmail("a@b.com") → Right("a@b.com")
*? Try.of(() => parseInt("abc")) → Left("Invalid format")
*? await AsyncTry.of(() => sendData(data), "Failed") → Right(response) or Left("Failed")
*/

// TODO: IMPLEMENT MONADS AND PROCESSING BELOW ↓↓


class Maybe {
  static of(x) {
    return x === null || x === undefined ? new Nothing() : new Just(x);
  }
}

class Just extends Maybe {
  constructor(x) {
    super();
    this.value = x;
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

class Nothing extends Maybe {
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
    return "Nothing";
  }
}


class Left {
  constructor(x) {
    this.value = x;
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  fold(f, _) {
    return f(this.value);
  }

  toString() {
    return `Left(${this.value})`;
  }
}

class Right {
  constructor(x) {
    this.value = x;
  }

  map(fn) {
    return new Right(fn(this.value));
  }

  chain(fn) {
    return fn(this.value);
  }

  fold(_, g) {
    return g(this.value);
  }

  toString() {
    return `Right(${this.value})`;
  }
}

class Either {
  static of(left, right) {
    return right === null || right === undefined ? new Left(left) : new Right(right);
  }

  static Left(x) {
    return new Left(x);
  }

  static Right(x) {
    return new Right(x);
  }
}


class Try {
  static of(fn, msg = "Unknown Error") {
    try {
      return Either.of(null, fn());
    } catch (_) {
      return Either.of(msg, null);
    }
  }
}


const AsyncTry = {
  of: async (fn, msg = "Async failure") => {
    try {
      const result = await fn();
      return new Right(result);
    } catch (_) {
      return new Left(msg);
    }
  }
};


function getOptional(key) {
  return function (obj) {
    return Maybe.of(obj[key]);
  };
}

function validateEmail(email){
  // this if statement will verify if the email format is correct (in that case returns true)
  if(/\S+@\S+\.\S+/.test(email)){
    return Either.Right(email);
  }
  return Either.Left("Invalid email");
}
  

const validatePassword = pwd => {
    if(pwd === null || pwd === undefined) return Either.Left("Password too short");
    else if(pwd.length >= 6) return Either.Right(pwd);
    else return Either.Left("Password too short");
}
  

const checkAge = age =>
  age >= 18
    ? Either.Right(age)
    : Either.Left("Too young");

const parseAge = (str) =>
  Try.of(() => {
    const n = parseInt(str);
    if (isNaN(n)) throw new Error("Invalid number");
    return n;
  }, "Invalid number");


async function processForm(formData, sendToAPI) {
  const email = getOptional("email")(formData).unwrap();
  const pwd = getOptional("password")(formData).unwrap();
  const rawAge = getOptional("age")(formData).unwrap();

  const result =
    validateEmail(email)
      .chain(() => validatePassword(pwd))
      .chain(() => parseAge(rawAge))
      .chain(checkAge)
      .fold(
        err => `Validation failed: ${err}`,
        () => "All fields valid!"
      );

  console.log(result);

  const submission = await AsyncTry.of(() => sendToAPI(formData), "Server error");
  console.log(submission.toString());
}


processForm({ email: "test@x.com", password: "secret", age: "20" });
processForm({ email: "", password: "123", age: "17" });
















// Below this comment any modification is prohibited.
module.exports = {
  Maybe, Just, Nothing,
  Either, Left, Right,
  Try,
  AsyncTry,
  getOptional,
  validateEmail,
  validatePassword,
  checkAge,
  parseAge,
  processForm
};
