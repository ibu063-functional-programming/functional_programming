/*
Debounce
Implement debounce(fn, delay) and test it with a simulated keypress handler (e.g., autocomplete).
*/
// Debounce: runs fn after delay has passed since last call
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Simulated autocomplete handler
function fetchSuggestions(query) {
  console.log(`Fetching suggestions for: "${query}"`);
}

// Wrap it with debounce
const debouncedFetch = debounce(fetchSuggestions, 500);

// Simulate rapid keypresses
const fakeTyping = ["a", "ap", "app", "appl", "apple"];
fakeTyping.forEach((q, i) => {
  setTimeout(() => debouncedFetch(q), i * 100); // simulate keypress every 100ms
});
//Output
//Fetching suggestions for: "apple"

