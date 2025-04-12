/*
Problem - Given a sorted array 'n' elements and a target element 't'
find the index of 't' in the array. Return -1 if the element is not found

arr= [-5, 2, 4, 6, 10] t=10 -> should return 4
PSEUDO CODE
1. If the array is empty, return -1 as the element cannot be found(base case)
2. If the aray has elements, find the middle element in the array. If target is an equal
to the middle element, return the middle element index(base case)
3. If target is less than the middle element, binary search the left half
4. If target is greater than the middle element, binary search the right half
*/
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
//this helper function will be called recursively
function search(arr, target, leftIndex, rightIndex) {
  //base case
  if (leftIndex > rightIndex) {
    return -1;
  }

  //calculate middle index to
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  //if target is equals to the elemnt that sits at the middle index
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

//big-O log(O(n))
