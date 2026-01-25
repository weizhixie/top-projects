import { Tree } from "./tree.js";

const getRandArr = () => {
  const randArr = [];
  for (let index = 0; index < 15; index++) {
    randArr.push(Math.floor(Math.random() * 100));
  }
  return randArr;
};

const testTree = new Tree(getRandArr());

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(testTree.root);
console.log(`Is balanced: ${testTree.isBalanced()}`);

const levelOrder = [];
const inOrder = [];
const preOrder = [];
const postOrder = [];
testTree.levelOrderForEachUsingIteration((node) => levelOrder.push(node.data));
testTree.inOrderForEach((node) => inOrder.push(node.data));
testTree.preOrderForEach((node) => preOrder.push(node.data));
testTree.postOrderForEach((node) => postOrder.push(node.data));
console.log(`Level Order: ${levelOrder}`);
console.log(`In Order: ${inOrder}`);
console.log(`Pre-order: ${preOrder}`);
console.log(`Post-order: ${postOrder}`);

testTree.insert(321);
testTree.insert(132);
testTree.insert(323);
testTree.insert(1234);
testTree.insert(213);
prettyPrint(testTree.root);
console.log(`Is balanced: ${testTree.isBalanced()}`);
testTree.rebalance();
prettyPrint(testTree.root);
console.log(testTree.isBalanced());

levelOrder.length = 0;
inOrder.length = 0;
preOrder.length = 0;
postOrder.length = 0;
testTree.levelOrderForEachUsingIteration((node) => levelOrder.push(node.data));
testTree.inOrderForEach((node) => inOrder.push(node.data));
testTree.preOrderForEach((node) => preOrder.push(node.data));
testTree.postOrderForEach((node) => postOrder.push(node.data));
console.log(`Level Order: ${levelOrder}`);
console.log(`In Order: ${inOrder}`);
console.log(`Pre-order: ${preOrder}`);
console.log(`Post-order: ${postOrder}`);
