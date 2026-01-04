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

    return null;
  }

  head() {
    return this.headNode ? this.headNode.value : null;
  }

  remove(key) {
    if (this.head().key === key) {
      this.headNode = this.headNode.nextNode;
      return true;
    }

    let curr = this.headNode;
    let prev = null;

    while (curr !== null) {
      if (curr.value.key === key) {
        prev.nextNode = curr.nextNode;
        return true;
      }

      prev = curr;
      curr = curr.nextNode;
    }

    return false;
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

  getKeys() {
    const key = [];
    let temp = this.headNode;

    while (temp !== null) {
      key.push(temp.value.key);
      temp = temp.nextNode;
    }

    return key;
  }
}
