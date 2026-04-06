const make3 = (a, b, c) => `${a}:${b}:${c}`;

const make3curried =
  (a) => (b) => (c) => `${a}:${b}:${c}`;

const make3curried2 = function (a) {
  return function (b) {
    return function (c) {
      return `${a}:${b}:${c}`;
    };
  };
};