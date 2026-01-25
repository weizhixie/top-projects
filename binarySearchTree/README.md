# Balanced Binary Search Tree

Implementation of Balanced Binary Search Tree written in JavaScript.

---

## Assignment

#### `buildTree(array)`

Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

#### `insert(value) / deleteItem(value)`

Write insert(value) and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not.

#### `levelOrderForEach(callback)`

Write a levelOrderForEach(callback) function that accepts a callback function as its parameter. levelOrderForEach should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrderForEach may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required.

#### `inOrderForEach(callback) / preOrderForEach(callback) / postOrderForEach(callback)`

Write inOrderForEach(callback), preOrderForEach(callback), and postOrderForEach(callback) functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrderForEach.

#### `height(value)`

Write a height(value) function that returns the height of the node containing the given value. Height is defined as the number of edges in the longest path from that node to a leaf node. If the value is not found in the tree, the function should return null.

#### `depth(value)`

Write a depth(value) function that returns the depth of the node containing the given value. Depth is defined as the number of edges in the path from that node to the root node. If the value is not found in the tree, the function should return null.

#### `isBalanced`

Write an isBalanced function that checks if the tree is balanced. A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.

#### `rebalance`

Write a rebalance function that rebalances an unbalanced tree.

### Test Examples

```js
const testTree = new Tree(getRandArr());

testTree.isBalanced(); //Is balanced: true
testTree.levelOrderForEachUsingIteration((node) => levelOrder.push(node.data));
testTree.inOrderForEach((node) => inOrder.push(node.data));
testTree.preOrderForEach((node) => preOrder.push(node.data));
testTree.postOrderForEach((node) => postOrder.push(node.data));

// Level Order: 48,23,62,2,41,52,86,15,36,46,51,57,76,99
// In Order: 2,15,23,36,41,46,48,51,52,57,62,76,86,99
// Pre-order: 48,23,2,15,41,36,46,62,52,51,57,86,76,99
// Post-order: 15,2,36,46,41,23,51,57,52,76,99,86,62,48
```
