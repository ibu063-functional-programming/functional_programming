/*
Promise Memoization
Implement promiseMemoize(fn).
Memoize an async function that fetches data (e.g., from JSONPlaceholder).
Show that repeated calls return cached promises.
*/
// Async memoization with error handling
function promiseMemoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log(`Promise cache hit for ${key}`);
      return cache[key];
    }
    cache[key] = fn(...args).catch(err => {
      delete cache[key]; // Retry next time if it fails
      throw err;
    });
    return cache[key];
  };
}

// Example: fetch from JSONPlaceholder
const fetchData = promiseMemoize(async (id) => {
  console.log(`Fetching data for id: ${id}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
});

// Run the test
fetchData(1).then(data => {
  console.log("First fetch:", data);
  // Second call should return from cache
  fetchData(1).then(cached => console.log("Cached fetch:", cached));
});

//Output
/*
Fetching data for id: 1
First fetch: { userId: 1, id: 1, title: "...", completed: false }
Promise cache hit for [1]
Cached fetch: { userId: 1, id: 1, title: "...", completed: false }
*/

