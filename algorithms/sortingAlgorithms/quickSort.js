/*
Given an array of integers sort the array

//Idea behind quickSort
1. Pick first element in the array
2. Pick last element as pivot
3. Pick a random element as pivot
4. Pick median as pivot

put everythig thats smaller than the pivot into  a left array
and everything thats greater than the pivot into a right array

repeat the process for the individual left and right array till you have
an array of length 1 which is sorted by definition

repeatedly concatenate the left array pivot and right array till one sorted array remains

*/

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left, pivot, ...quickSort(right))];
}

const arr = [4, 7, 8, 12, 5, 2];
console.log(quickSort(arr));

//worst case complexity O(n^2) happens when  array is already sorted. since you will have an empty and full arrray
//avg case complexity O(nlogn)- since we recursively divide the array into smaller array,
