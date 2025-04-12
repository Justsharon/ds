/*
Given a number'n', find the nth element of the fibonacci sequence
- In mathematics fibonacci sequence is a sequence in which each number is
  the sum of the two preceding ones
- The first two numbers in the sequence is 0 and 1
1. recursiveFibonacci(0) = 0
2. recursiveFibonaccic(1) = 1 third number is the sum of first two 0 + 1
3. recursiveFibonacci(6) = 8

if F reps a func to calculate the fibonacci number, then Fn = Fn-1 + Fn -2
loop wont stop if we do not have a base case;
the base case is F0 = 0 and F1 = 1
*/
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(6));

//time complexity is O(2^n)
