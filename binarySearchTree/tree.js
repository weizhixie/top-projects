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
}
