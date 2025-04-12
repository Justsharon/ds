function findSmallest(arr) {
  let smallest = arr[0];
  let indexOfSmallest = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      indexOfSmallest = i;
    }
  }
  return indexOfSmallest;
}

function selectionSort(arr) {
  let newArray = [];
  let copyArr = arr.slice();
  while (copyArr.length > 0) {
    let smallestIndex = findSmallest(copyArr);
    newArray.push(copyArr.splice(smallestIndex, 1)[0]);
  }
  return newArray;
}
const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
