const NewTree = (value, left, right) =>
  (nonEmptyFn, _emptyFn) => nonEmptyFn(value, left, right);

const EmptyTree = () =>
  (_nonEmptyFn, emptyFn) => emptyFn();

const treeRoot = (tree) =>
  tree(
    (value, _left, _right) => value,
    () => null
  );

  const treeIsEmpty = (tree) =>
  tree(
    () => false,
    () => true
  );

  const treeToObject = (tree) =>
  tree(
    (value, left, right) => {
      const leftBranch = treeToObject(left);
      const rightBranch = treeToObject(right);
      const result = { value };
      if (leftBranch) {
        result.left = leftBranch;
      }
      if (rightBranch) {
        result.right = rightBranch;
      }
      return result;
    },
    () => null
  );

const treeSearch = (findValue, tree) =>
  tree(
    (value, left, right) =>
      findValue === value
        ? true
        : findValue < value
        ? treeSearch(findValue, left)
        : treeSearch(findValue, right),
    () => false
  );

const tree = NewTree(
  10,
  NewTree(5, EmptyTree(), EmptyTree()),
  NewTree(15, EmptyTree(), EmptyTree())
);

console.log(treeSearch(5, tree));   // true
console.log(treeSearch(100, tree)); // false
console.log(treeSearch(15, tree)); // false
console.log(treeToObject(tree))