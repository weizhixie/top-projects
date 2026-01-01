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

  insertAt(index, ...values) {
    if (values.length === 0) return;
    if (index < 0) throw new RangeError("Index must be non-negative");

    if (this.headNode === null && index === 0) {
      values.forEach((value) => this.append(value));
      return;
    }

    let counter = 0;
    let temp = this.headNode;
    let prev = null;

    const createMiniList = (values) => {
      let miniHead = null;
      let miniTail = null;

      values.forEach((value) => {
        if (miniHead === null) {
          miniHead = new Node(value);
          miniTail = miniHead;
        } else {
          miniTail.nextNode = new Node(value);
          miniTail = miniTail.nextNode;
        }
      });

      return { miniHead, miniTail };
    };

    if (index === 0) {
      const { miniHead, miniTail } = createMiniList(values);
      miniTail.nextNode = this.headNode;
      this.headNode = miniHead;
      return;
    }

    while (temp !== null) {
      if (index === counter) {
        const { miniHead, miniTail } = createMiniList(values);
        miniTail.nextNode = temp;
        prev.nextNode = miniHead;
        return;
      }

      counter++;
      prev = temp;
      temp = temp.nextNode;
    }

    //check after while loop, ensure to append the list insert at the end of the list
    if (index === counter) {
      const { miniHead } = createMiniList(values);
      prev.nextNode = miniHead;
      return;
    }

    if (index > counter) {
      throw new RangeError(`Index must be less than or equal to ${counter}`);
    }
  }
}
