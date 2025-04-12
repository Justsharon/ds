/*
Given an array of integers sort the array
//Idea behind merge sort
1. Divide the array into sub arrays, each containing only one element(An with one element is considred sorted)
2. Reapeatedly merge the sub arrays to produce new sorted sub arrays
until there is only one sub array. THat will be the sorted array
*/
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [3, 6, 8, 2, 5];
console.log(mergeSort(arr));

//big-O = O(nlogn)
