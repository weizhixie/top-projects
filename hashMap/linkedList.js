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

  findKey(key) {
    let temp = this.headNode;

    while (temp !== null) {
      if (temp.value.key === key) return temp.value;
      temp = temp.nextNode;
    }

    return undefined;
  }
}
