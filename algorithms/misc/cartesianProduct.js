/**
 * Given two finite  non-empty sets, find their cartesian product.
 * In mathematics , specifically set  theory, the cartesian product of two sets A 
 *and B, denoted by AxB, is the set of all ordered pairs(a,b) where a is in A and b in B

 const A = [1,2]
 const B =  [3,4]
 AxB =[[1,3],[1,4], [2,3], [2,4]]

 const C = [1,2]
 const D =  [3,4,5]
 CxD =[[1,3],[1,4],[1,5], [2,3], [2,4], [2,5]]

 Traverse each array and pair each element in the first array with each element in the second array
 */

function cartesianProduct(array1, array2) {
  let product = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      product.push([array1[i], array2[j]]);
    }
  }
  return product;
}
const array1 = [1, 2];
const array2 = [3, 4];
console.log(cartesianProduct(array1, array2));

//big-O = O(mn)