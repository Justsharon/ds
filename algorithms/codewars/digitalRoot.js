/**
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer guide me on how to tackle this
 */

function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}
//if n = 10  10 - 1 = 9 divide by 9 remainder is 0 + 1
//solution 2
function digitalRoot2(n) {
  if (n < 10) return n;
  return digitalRoot2(
    n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0),
  );
}
