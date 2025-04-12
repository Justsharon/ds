function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//find sum of first n natural numbers
//summation(4) = 10
//1+2+3+4  = 10
//count the number of times a statement executes based on input size
//inthe above example line2,4, and 6
//when n=4 line 2 executes once line fur executes 4 times and line 6 once
//Time complexity is O(n)-linear(as size of input increases the time complexity also increases)

//a loops worst case is when it iterates over the entire
//input and therefore the worst case is linear. if n= 10 it will be executed 10 times

function summation1(n) {
  return (n * (n + 1)) / 2;
}
//time complexity is O(1), constant time complexity. irregardless of the
// number of in[uts the return statement is only run once]
