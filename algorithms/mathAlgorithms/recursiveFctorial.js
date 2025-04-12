/*
  * Problem - Given an integer 'n' find the factorial of that integer
  * in matheatics, the factorial of a non-negative integer
  * n, denoted n!, is the product of all positive integers less than or equal to n.
  * factorial of zero and 1 =   is 1
  * factorial(4) = 4*3*2*1 = 24
  * factorial(4) = 5*4*3*2*1 = 120
  for loop star`ts at 2 since multiplying by 1 has no effect

  factorial of a non-negative integr n is the product oa all
  positive integers less than or equal to 'n'
  5! = 5*4*3*2*1
  4! = 4*3*2*1 ~ 4*3!
  3! = 3*2*1 ~ 3*2!
  2! = 2*1 ~ 2*1! f is callec twice
  1! = 1 * 1  ~ 1*0!
  0! = 1
  THUS INCONCLUSION n! = n*(n-1)!
*/
function recursiveFactorial(n) {
  //base case to stop infinite factorial
  if (n === 0) {
    return 1;
  }
  //use paper and pen to trace code execution
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(4));

//time complexity O(n) as n increases no of instructions icrease at same pace(linear time complexity)
