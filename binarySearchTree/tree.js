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

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.data) return currentNode;

      if (value > currentNode.data) {
        if (currentNode.right === null) {
          return (currentNode.right = new Node(value));
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          return (currentNode.left = new Node(value));
        }
        currentNode = currentNode.left;
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
}
