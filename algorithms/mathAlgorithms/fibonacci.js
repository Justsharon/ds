/*
Given a number'n', find the first 'n' elements of the fibonacci sequence
- In mathematics fibonacci sequence is a sequence in which each number is
  the sum of the two preceding ones
- The first two numbers in the sequence is 0 and 1
1. fibonacci(2) = [0,1]
2. fibonacc(3) = [0,1,1] third number is the sum of first two 0 + 1
3. fibonacci(7) = [0,1,1,2,3,5,8]
*/

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + [fib[i - 2]];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//Big-O = O(n)
