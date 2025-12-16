function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
    // Handle when right array remaining elements
    if (leftIndex >= leftArr.length) {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
    // Handle when left array remaining elements
    else if (rightIndex >= rightArr.length) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArr;
}

console.log(mergeSort([])); //[]
console.log(mergeSort([73])); //[73]
console.log(mergeSort([1, 2, 3, 4, 5])); //[1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); //[0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); //[79, 100, 105, 110]
