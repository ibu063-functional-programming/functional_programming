// Functional Binary Tree Definition
const EmptyTree = () => (nonEmpty, empty) => empty();

const NewTree = (value, left, right) =>
  (nonEmpty, empty) => nonEmpty(value, left, right);

// treeIsEmpty :: Tree → Boolean
const treeIsEmpty = (tree) =>
  tree(
    () => false,  // non-empty case
    () => true    // empty case
  );

// treeRoot :: Tree → a | null
const treeRoot = (tree) =>
  tree(
    (value, _left, _right) => value,
    () => null
  );
// Create an example tree
const myTree = NewTree(
  10,
  EmptyTree(),
  EmptyTree()
);

const empty = EmptyTree();

console.log("Is tree empty?", treeIsEmpty(myTree));      // false
console.log("Root of tree:", treeRoot(myTree));          // 10

console.log("Is empty tree empty?", treeIsEmpty(empty)); // true
console.log("Root of empty tree:", treeRoot(empty));     // null
