async function getUserName(userId, fetchFn) {
  // fetchFn is a function passed in that performs the fetch (or a stub in tests)
  const response = await fetchFn(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data.name;
}

// Example test for getUserName using a fake fetch function
const fakeFetch = async (url) => {
  // we can verify the URL if needed
  return {
    json: async () => ({ name: "Alice Testuser" })
  };
};

getUserName(123, fakeFetch).then(name => {
  console.assert(name === "Alice Testuser", "Should return the name from fake data");
});