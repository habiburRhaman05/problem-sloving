// Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.
//
// Input: int[] nums
// Output: int[]
// Constraints: nums.length <= 100.
// Edge Case: Array with no even numbers.
// Hint: Use the modulo operator inside a filter condition.

function getEvenNumbers(nums) {
  return nums.filter(num => num % 2 === 0);
}

//  calling the function
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbers([1, 3, 5, 7]));
console.log(getEvenNumbers([2, 4, 6, 8]));
