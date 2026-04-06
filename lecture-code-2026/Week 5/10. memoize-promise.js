//if node version is < 18 use import and install npm install node-fetch
// in package.json add line "type": "module"
import fetch from 'node-fetch';

function promiseMemoize(fn) {
  const cache = {};

  return function (...args) {
    const strX = JSON.stringify(args);

    if (strX in cache) {
      return cache[strX];
    }

    cache[strX] = fn(...args).catch((err) => {
      delete cache[strX]; // Remove from cache if rejected
      throw err;
    });

    return cache[strX];
  };
}

const fetchData = promiseMemoize(async (id) => {
  console.log(`Fetching for id: ${id}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
});

fetchData(1).then(console.log);
fetchData(1).then(console.log); // Second call uses cached promise