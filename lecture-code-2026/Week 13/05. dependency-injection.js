// Without dependency injection - directly uses Math.random (hard to test)
/*function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}*/

// With dependency injection - takes RNG function as parameter
function pickRandom(arr, rng) {
  const index = Math.floor(rng() * arr.length);
  return arr[index];
}

const half = () => 0.5;  // always returns 0.5
console.assert(pickRandom([10, 20, 30, 40], half) === 30, "With rng fixed at 0.5, should pick the middle element (30)");
