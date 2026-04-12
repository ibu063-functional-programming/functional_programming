function evaluate(str) {
  const PLUS = "+";
  const MINUS = "-";
  const TIMES = "*";
  const DIVIDES = "/";
  const MODULUS = "%";
  const LPARENS = "(";
  const RPARENS = ")";

  let curr = 0;

  // Tokenize: numbers and symbols
  const tokens = str
    .replace(/\s+/g, "") // remove whitespace
    .split("")
    .map((x) => (isDigit(x) ? Number(x) : x));

  return expression();

  function isDigit(char) {
    return /\d/.test(char);
  }

  function peek() {
    return tokens[curr];
  }

  function consume() {
    return tokens[curr++];
  }

  function expression() {
    let result = term();
    while (peek() === PLUS || peek() === MINUS) {
      const op = consume();
      const rhs = term();
      if (op === PLUS) result += rhs;
      if (op === MINUS) result -= rhs;
    }
    return result;
  }

  function term() {
    let result = factor();
    while (peek() === TIMES || peek() === DIVIDES || peek() === MODULUS) {
      const op = consume();
      const rhs = factor();
      if (op === TIMES) result *= rhs;
      if (op === DIVIDES) result /= rhs;
      if (op === MODULUS) result %= rhs;
    }
    return result;
  }

  function factor() {
    const token = consume();
    if (typeof token === "number") {
      return token;
    } else if (token === LPARENS) {
      const result = expression();
      if (consume() !== RPARENS) throw new Error("Expected closing parenthesis");
      return result;
    } else if (token === MINUS) {
      return -factor();
    }
    throw new Error("Unexpected token: " + token);
  }
}

console.log(evaluate("1+2*3"));       // 7
console.log(evaluate("(1+2)*3"));     // 9
console.log(evaluate("8%3+1"));       // 3
console.log(evaluate("2*(3+4)-5"));   // 9