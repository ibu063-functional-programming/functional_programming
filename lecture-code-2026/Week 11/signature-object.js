// getPerson :: Number → { id: Number, name: String }
const getPerson = (personId) => {
  // Assume some logic here to determine the person's name
  const personName = "John Doe"; // placeholder

  return { id: personId, name: personName };
};

console.log(getPerson(1))