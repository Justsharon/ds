/*
Given an array of 'n' elements and a targert element t,
find the index of 't' in the array. Return -1 if the target element is not found

linear search pseudo code
start at first element in the array and move towards the last
at each element though, check if the element is equal to the targert element
if element found, return the index of the element
if not found return -1
*/

function findIndexOfT(arr, target) {
  //for ...of will not return the indeex but the basic for loop does
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findIndexOfT([2, 4, 6, 7, 7, 5, 9], 5));
console.log(findIndexOfT([2, 4, 6, 7, 7, 5, 9], 3));

//Big-O IS LINEAR TIME COMPLEXITY AS SIZE  OF ARR INCREASES THE SIZE OF INPUT INCREASES(O(n))
