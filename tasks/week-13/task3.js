async function getData(url, fetchFn) {
  const response = await fetchFn(url);
  return await response.json();
}
  // Mock fetch function for testing
const fakeFetch = async (url) => {
  console.log("Fake fetch called with:", url);
  return {
    json: async () => ({ message: "Hello from mock!" })
  };
};

// Test case
getData("https://api.example.com/test", fakeFetch).then(data => {
  console.assert(data.message === "Hello from mock!", "Test Failed: mock fetch didn't return expected result");
});
