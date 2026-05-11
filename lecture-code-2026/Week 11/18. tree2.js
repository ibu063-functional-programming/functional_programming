const EmptyTree = () => (nonEmpty, empty) => empty();

const NewTree = (x, left, right) => (nonEmpty, empty) =>
  nonEmpty(x, left, right);

const myRoot = myTree(
  (value) => value,
  () => null
);

const treeCount = (tree) =>
  tree(
    (value, left, right) =>
      1 + treeCount(left) + treeCount(right),
    () => 0
  );