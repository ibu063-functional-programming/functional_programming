const SIZE = 8;
const places = Array(SIZE);
let solutions = 0;

const checkR = (column, row) => {
  const checkColumn = (i) => {
    if (i === column) {
      return true;
    } else if (
      places[i] === row ||
      Math.abs(places[i] - row) === column - i
    ) {
      return false;
    } else {
      return checkColumn(i + 1);
    }
  };
  return checkColumn(0);
};

const finder = (column = 0) => {
  if (column === SIZE) {
    // A full solution found
    console.log(JSON.stringify(places.map(x => x + 1))); // 1-based index
    solutions++;
  } else {
    const testRowsInColumn = (j) => {
      if (j < SIZE) {
        if (checkR(column, j)) {
          places[column] = j;
          finder(column + 1);
        }
        testRowsInColumn(j + 1); // try next row
      }
    };
    testRowsInColumn(0);
  }
};

finder();
console.log(`Solutions found: ${solutions}`);

