// Tree constructors using Church encoding
const EmptyTree = () => (nonEmpty, empty) => empty();

const NewTree = (value, left, right) =>
  (nonEmpty, empty) => nonEmpty(value, left, right);

const treeInsert = (newValue, tree) =>
  tree(
    (value, left, right) =>
      newValue <= value
        ? NewTree(value, treeInsert(newValue, left), right)
        : NewTree(value, left, treeInsert(newValue, right)),
    () => NewTree(newValue, EmptyTree(), EmptyTree())
  );

  let tree = EmptyTree();
tree = treeInsert(10, tree);
tree = treeInsert(5, tree);
tree = treeInsert(15, tree);
tree = treeInsert(7, tree);

// Convert to object for printing
const treeToObject = (tree) =>
  tree(
    (value, left, right) => {
      const result = { value };
      const leftObj = treeToObject(left);
      const rightObj = treeToObject(right);
      if (leftObj) result.left = leftObj;
      if (rightObj) result.right = rightObj;
      return result;
    },
    () => null
  );

console.log(JSON.stringify(treeToObject(tree), null, 2));
