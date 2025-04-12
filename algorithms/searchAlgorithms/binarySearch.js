/*
Given a sorted array of n elements and a targert element t,
find the index of t in the array.
return -1 if the target element is not found

binary search only works on a sorted array

pseudo code
-if the array is empty, return -1 as the element cannot be found
-if the array has elements, find the middle element in the array
-if target is equal to the middle elemnt,return the middle element index.
-if targert is less than the middle element, binary search left half of the array
-if targert is greater than the middle element, binary search right half of the array

*/
function binarySearch(arr, target) {
  //two pointers to point at the left and right most index of the array
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  //add a while loop that runs as long as left index is less than right index
  while (leftIndex <= rightIndex) {
    //in each iteration find the middle element and use math.floor() to return lower integer value in case of even  numbers
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    //if target is equals to the elemnt that sits at the middle index
    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    //decide whether to persue the left or the right index
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([2, 4, 6, 8, 7], 8));
//big -O = O(logn) time complexity is  logaritmic and not linear because at each iteration the input size  is reduced by half

//REAL WORLD APPLICATION
//1. When you login to facebook, it searches for your name from the db
