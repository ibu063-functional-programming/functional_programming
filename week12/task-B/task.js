// ************ TASK DESCRIPTION ************
//? Safe Functional Calculator
/*
*   In this assignment, you will build a robust calculator engine using
*   functional programming concepts including the Maybe, Either, Try, and AsyncTry monads.
*
*   Your calculator must:
*   - Safely retrieve the expression from an input object using the Maybe monad
*   - Validate the expression format using Either
*   - Parse and evaluate the expression using Try
*   - Send the final result to a mock API using AsyncTry
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
*
*
*   REQUIRED UTILITIES:
*
*   - validateExpression(expr)
*     - Accepts a string expression like "3 + 4 * 2"
*     - Checks that the string contains only valid characters: digits, spaces, and + - * / ( )
*     - Returns:
*         Right(expr) if valid
*         Left("Invalid format") if it contains disallowed characters or is not a string
*
*   - parseExpression(expr)
*     - Tries to evaluate the mathematical expression using `eval()`
*     - Returns:
*         Right(result) if evaluation is successful and result is a number
*         Left("Invalid expression") if evaluation fails or result is not a number
*     - Must be wrapped using the Try monad (you need to return it)
*
*   - formatResult(value)
*     - Accepts a number
*     - Converts it into a readable string message, e.g., "Result is: 42"
*     - Returns:
*         Right("Result is: 42") if input is a valid number
*         Left("Invalid result") otherwise
*
*   - processCalculation(input, sendToAPI)
*     - Main orchestration function that:
*         1. Safely extracts the `expr` field from the input object using `getOptional`
*         2. Validates the expression using `validateExpression`
*         3. Parses and evaluates the expression using `parseExpression`
*         4. Formats the final result using `formatResult`
*         5. Logs the final output to the console
*         6. Sends the result to an API using `AsyncTry`
*         7. Logs the result of the API call to the console
*     - All intermediate steps must be chained using functional error-handling patterns (Maybe, Either, Try, AsyncTry)
*
*? Example usage:
*? getOptional("expr")({ expr: "3 + 4" }) → Just("3 + 4")
*? validateExpression("3 + 4") → Right("3 + 4")
*? Try.of(() => eval("3 + 4")) → Right(7)
*? await AsyncTry.of(() => sendToAPI(7), "Send failed") → Right(response) or Left("Send failed")
*
*   You should NOT use external libraries or regex for parsing; `eval()` is allowed inside Try (more explanation below)
*   
*/

// TODO: IMPLEMENT MONADS AND CALCULATOR BELOW ↓↓


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

function validateExpression(expr){
  // this if will verify if the expression format is correct (in that case returns true)
  if(typeof expr === "string" && /^[0-9+\-*/ ().]+$/.test(expr)){
    return Either.Right(expr)
  }
  return Either.Left("Invalid format");
}
  
function parseExpression(expr){
  // evaluation of the given string expression can be done using "eval(stringExpression)" function
  // console.log(eval("2 + 2")); -> Expected output: 4 (int)
  // the result from the "eval" function can be of type number (you can check it using typeof command) or NaN 
  // (can be checked by isNaN(result) command)
  return Try.of(() => {
      const result = eval(expr);
      if (typeof result !== "number" || isNaN(result)) throw new Error("Invalid calculation");
      return result;
    }, "Invalid expression");
}


const formatResult = val =>
  // you can check the type of val using "typeof" command
  // P.S. NaN === "number" so you need to implement a check for that also
  typeof val === "number" && !isNaN(val)
    ? Either.Right(`Result is: ${val}`)
    : Either.Left("Invalid result");

async function processCalculation(input, sendToAPI) {
  const expr = getOptional("expr")(input).unwrap();

  const output =
    validateExpression(expr)
      .chain(parseExpression)
      .chain(formatResult)
      .fold(
        err => `Calculation failed: ${err}`,
        msg => msg
      );

  console.log(output);

  const sent = await AsyncTry.of(() => sendToAPI(output), "Send failed");
  console.log(sent.toString());
}





const mockAPI = (res) => Promise.resolve(`Server received: ${res}`);

processCalculation({ expr: "3 + 4 * 2" }, mockAPI);
processCalculation({ expr: "not valid" }, mockAPI);


// Below this comment any modification is prohibited.
module.exports = {
  Maybe, Just, Nothing,
  Either, Left, Right,
  Try,
  AsyncTry,
  getOptional,
  validateExpression,
  parseExpression,
  formatResult,
  processCalculation
};
