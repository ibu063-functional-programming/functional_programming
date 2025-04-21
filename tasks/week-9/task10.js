class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const insertBetween = (head, value, afterValue) => {
  if (!head) return null;

  // If current node matches afterValue, insert new node after it
  if (head.value === afterValue) {
    const newNode = new ListNode(value, insertBetween(head.next, value, '__skip'));
    return new ListNode(head.value, newNode);
  }

  // Otherwise, copy this node and recurse
  return new ListNode(head.value, insertBetween(head.next, value, afterValue));
};

// Original list: 1 -> 2 -> 3
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Insert 99 after node with value 2
const newHead = insertBetween(node1, 99, 2);

// Traverse and print new list
let current = newHead;
while (current) {
  console.log(current.value);
  current = current.next;
}
// Output:
// 1
// 2
// 99
// 3

// Ensure original list is unchanged
console.log(node2.next.value); // Still 3
