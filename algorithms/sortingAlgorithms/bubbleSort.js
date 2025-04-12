/**
Given an array of integers sort the array, can either be asc or descending

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

with bubble sort you compare adjacent elements in the array and
swap the positions if they are not in the intended order.
Repeat the instruction as yu step through  each element in the array
once you step through the whole array with no swaps, the array is sorted
*/

function bubbleSort(arr) {
  //keps track os swapped
  let swapped;
  // go through array attleat once
  do {
    swapped = false;
    //well have to go through each el of array
    //arr.length - 1 since arr[i] is compared toarr[i + 1]
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    //if you encounter swap repeat
  } while (swapped);
}
const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);

//func contains two loops for loop nested in a do while
// Big- O  = O(n^2)
