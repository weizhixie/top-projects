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

  head() {
    return this.headNode ? this.headNode.value : undefined;
  }

  tail() {
    if (this.headNode === null) {
      return undefined;
    } else {
      let temp = this.headNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      return temp.value;
    }
  }

  at(index) {
    if (index < 0 || this.headNode === null) return undefined;

    let counter = 0;
    let temp = this.headNode;

    while (temp !== null) {
      if (index === counter) return temp.value;

      counter++;
      temp = temp.nextNode;
    }

    return undefined;
  }

  pop() {
    if (this.headNode === null) return undefined;

    const value = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    return value;
  }

  contains(value) {
    let temp = this.headNode;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let index = 0;
    let temp = this.headNode;

    while (temp !== null) {
      if (temp.value === value) return index;
      index++;
      temp = temp.nextNode;
    }

    return -1;
  }

  toString() {
    if (this.headNode === null) return "";

    let str = "";
    let temp = this.headNode;

    while (temp !== null) {
      str += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }

    str += "null";
    return str;
  }
}
