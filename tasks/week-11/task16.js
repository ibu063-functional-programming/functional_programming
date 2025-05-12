// Functional binary tree (Church-encoded)
const EmptyTree = () => (nonEmpty, empty) => empty();

const NewTree = (value, left, right) =>
  (nonEmpty, empty) => nonEmpty(value, left, right);

const treeSearch = (searchValue, tree) =>
  tree(
    (value, left, right) =>
      searchValue === value
        ? true
        : searchValue < value
        ? treeSearch(searchValue, left)
        : treeSearch(searchValue, right),
    () => false
  );

  let tree = EmptyTree();
tree = NewTree(10,
  NewTree(5, EmptyTree(), NewTree(7, EmptyTree(), EmptyTree())),
  NewTree(15, EmptyTree(), EmptyTree())
);

console.log(treeSearch(7, tree));  // true
console.log(treeSearch(20, tree)); // false
