function traverseDom(node, depth = 0) {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);

  Array.from(node.children).forEach(child => {
    traverseDom(child, depth + 1);
  });
}

traverseDom(document.body);
