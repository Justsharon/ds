/*
  * Problem - Give an integer 'n' find the factorial of that integer
  * in matheatics, the factorial of a non-negative integer
  * n, denoted n!, is the product of all positive integers less than or equal to n.
  * factorial of zero and 1 =   is 1
  * factorial(4) = 4*3*2*1 = 24
  * factorial(4) = 5*4*3*2*1 = 120
  for loop starts at 2 since multiplying by 1 has no effect
*/

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
//Big-O(n)  - linear time complexity
