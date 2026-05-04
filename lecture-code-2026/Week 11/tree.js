const EmptyTree = () => null;

const NewTree = (value, left, right) => ({
  value,
  left,
  right
});
const myTree = NewTree(
  22,
  NewTree(
    9,
    NewTree(4, EmptyTree(), EmptyTree()),
    NewTree(12, EmptyTree(), EmptyTree())
  ),
  NewTree(
    60,
    NewTree(56, EmptyTree(), EmptyTree()),
    EmptyTree()
  )
);

console.log(myTree);