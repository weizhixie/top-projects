import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

console.log(list.size());
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.size());
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.size());

console.log(list.head());
console.log(list.tail());
console.log(list.at(-3));
console.log(list.at(3));
console.log(list.at(50));
console.log(list.pop());

console.log(list.contains("cat"));
console.log(list.findIndex("parrot"));
