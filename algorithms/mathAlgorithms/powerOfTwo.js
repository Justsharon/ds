/*
  Give a positive integer 'n', determine if the numbe is a power of 2 or not
  an integer is a power of two if there exist an integer 'x' such that 'n'
  === 2
  isPowerOfTwo(1) = true(2^0)
  isPowerOfTwo(2) = true(2^1)
  isPowerOfTwo(5) = false
*/

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(5));
