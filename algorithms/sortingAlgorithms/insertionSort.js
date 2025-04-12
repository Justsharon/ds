/**
Given an array of integers sort the array, can either be asc or descending

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

with insertion sort, you virtually split the array into a sorted and unsorted part
assume that the first el is sorted and  and remainig elements are unsorted
select an unsorted element and compare with all the elements in the sorted part
if the elements in the sorted part is smaller than the selected element,
proceed to the next element in the unsorted part.
else shift larger elements in the sorted towards the right
insert the selected element at the right index
repeat till all unsorted array are sorted
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - Int16Array;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);

//big-O = O(n^2)

// solution
// function insertionSort(arr) {
//   //for loop to iterate over the unsorted array
//   for (let i = 1; i < arr.length; i++) {
//     //store number to insert in each iteration for when you find the right place
//     let numberToInsert = arr[i];
//     //index of  sorted element j is the index of sorted part
//     let j = i - 1;
//     // compare the sorted elements in the array with number to insert trying to find
//     // the index where insertion is to happen, the index is where orted element is lesser than
//     //  number to insert, insert number to the right of that index
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     //point where condition failed or the sorted element is lesser than number to insert
//     arr[j + 1] = numberToInsert;
//   }
//   return arr;
// }
