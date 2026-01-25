import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);

    return this.buildTreeRecur(
      uniqueSortedArray,
      0,
      uniqueSortedArray.length - 1,
    );
  }

  buildTreeRecur(array, start, end) {
    if (start > end) return null;

    const middle = Math.floor((start + end) / 2);
    const root = new Node(array[middle]);

    root.left = this.buildTreeRecur(array, start, middle - 1);
    root.right = this.buildTreeRecur(array, middle + 1, end);

    return root;
  }

  insert(value) {
    if (this.root === null) return (this.root = new Node(value));

    let root = this.root;
    while (root !== null) {
      if (value === root.data) return root;

      if (value > root.data) {
        if (root.right === null) {
          return (root.right = new Node(value));
        }
        root = root.right;
      } else {
        if (root.left === null) {
          return (root.left = new Node(value));
        }
        root = root.left;
      }
    }
    return null;
  }

  insertUsingRecursion(value, root = this.root) {
    //check if the tree is empty
    if (this.root === null) return (this.root = new Node(value));
    //find empty left/right spot and create a new node as a new leaf
    if (root === null) return new Node(value);
    if (value === root.data) return root;

    if (value > root.data) {
      root.right = this.insertUsingRecursion(value, root.right);
    } else {
      root.left = this.insertUsingRecursion(value, root.left);
    }

    return root;
  }

  deleteItem(value, root = this.root) {
    if (root === null) return root;

    if (value > root.data) {
      root.right = this.deleteItem(value, root.right);
    } else if (value < root.data) {
      root.left = this.deleteItem(value, root.left);
    } else {
      //Node with 2 children
      if (root.left !== null && root.right !== null) {
        let inorderSuccessor = root.right;
        while (inorderSuccessor.left !== null) {
          inorderSuccessor = inorderSuccessor.left;
        }

        root.data = inorderSuccessor.data;
        root.right = this.deleteItem(inorderSuccessor.data, root.right);
        return root;
      }

      // Node with 1 or 0 children
      return root.left ?? root.right;
    }

    return root;
  }

  find(value, root = this.root) {
    if (root === null) return null;

    if (value === root.data) return root;

    if (value > root.data) {
      return this.find(value, root.right);
    } else {
      return this.find(value, root.left);
    }
  }

  levelOrderForEachUsingIteration(callback) {
    if (typeof callback !== "function")
      throw new Error("Callback function is required");
    if (this.root === null) return;

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();

      callback(current);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  levelOrderForEachUsingRecursion(callback) {
    if (typeof callback !== "function")
      throw new Error("Callback function is required");
    if (this.root === null) return;

    const queue = [];
    queue.push(this.root);

    this.levelOrderForEachRecur(callback, queue);
  }

  levelOrderForEachRecur(callback, queue) {
    if (queue.length === 0) return;

    const current = queue.shift();
    callback(current);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);

    this.levelOrderForEachRecur(callback, queue);
  }

  inOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Callback function is required");
    if (root === null) return;

    this.inOrderForEach(callback, root.left);
    callback(root);
    this.inOrderForEach(callback, root.right);
  }

  preOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Callback function is required");
    if (root === null) return;

    callback(root);
    this.preOrderForEach(callback, root.left);
    this.preOrderForEach(callback, root.right);
  }

  postOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Callback function is required");
    if (root === null) return;

    this.postOrderForEach(callback, root.left);
    this.postOrderForEach(callback, root.right);
    callback(root);
  }

  height(value) {
    const root = this.find(value);
    if (root === null) return null;

    return this.heightRecur(root);
  }

  heightRecur(root) {
    if (root === null) return -1;

    const leftHeight = this.heightRecur(root.left);
    const rightHeight = this.heightRecur(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, root = this.root, depth = 0) {
    if (root === null) return null;

    if (value === root.data) return depth;

    if (value > root.data) {
      return this.depth(value, root.right, depth + 1);
    } else {
      return this.depth(value, root.left, depth + 1);
    }
  }

  isBalanced() {
    return this.isBalancedRecur(this.root) !== -1;
  }

  isBalancedRecur(root) {
    if (root === null) return 0;

    const leftHeight = this.isBalancedRecur(root.left);
    const rightHeight = this.isBalancedRecur(root.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }
}
