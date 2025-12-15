//Using iteration
function fibs(num) {
  const arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

console.log(fibs(-1)); //[0, 1]
console.log(fibs(2)); //[0, 1]
console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

//Using recursion
function fibsRec(num) {
  if (num <= 2) return [0, 1];

  const arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);

  return arr;
}

console.log(fibsRec(-1)); //[0, 1]
console.log(fibsRec(2)); //[0, 1]
console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
