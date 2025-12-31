import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let temp = this.headNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let length = 0;
    let temp = this.headNode;

    while (temp !== null) {
      length++;
      temp = temp.nextNode;
    }

    return length;
  }
}
