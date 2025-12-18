# Recursion methods

This section includes implementations of the Fibonacci sequence and the Merge Sort algorithm using JavaScript.

## fibonacci.js

Generates a Fibonacci sequence using both **iteration** and **recursion**. The function takes a single number and returns an array containing that many numbers in the Fibonacci sequence.

### Test Example

```js
fibs(-1); // → [0, 1]
fibs(2); // → [0, 1]
fibs(8); // → [0, 1, 1, 2, 3, 5, 8, 13]
```

## mergeSort.js

Implements the **Merge Sort** algorithm. The function takes an array of numbers and returns a new array sorted in ascending order.

### Test Examples

```js
mergeSort([]); // → []

mergeSort([73]); // → [73]

mergeSort([1, 2, 3, 4, 5]); // → [1, 2, 3, 4, 5]

mergeSort([3, 2, 1, 13, 8, 5, 0, 1]); // → [0, 1, 1, 2, 3, 5, 8, 13]

mergeSort([105, 79, 100, 110]); // → [79, 100, 105, 110]
```
