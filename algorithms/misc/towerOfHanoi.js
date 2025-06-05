/**
 * The objective of the tower of hanoi puzzle is to move the entire stack to the last rod obeing the following rules
 * Only one disc may be moved at a time
 * Each move consist of taking the upper disc from one of the stack and placing it on top of another stack or on an empty rod
 * no disc may be placed on a disk that is smaller
 *
 * Idea behind solution
 * shift (n-1)disc from 'A' to 'B', using 'C' (When required)
 * shift last disc from 'A' to 'C'
 * shift (n-1)disc from 'B' to 'C', using 'A' (When required)
 */

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disc 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disc ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "C", "B");

//Big-O= O(2^n)