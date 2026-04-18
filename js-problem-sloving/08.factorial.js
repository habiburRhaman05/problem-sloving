// Factorial Calculation
// Task: Find the factorial of a non-negative integer n.
//
// Input: integer n
// Output: integer
// Constraints: 0 <= n <= 12.
// Edge Case: n = 0 (Factorial of 0 is 1).
// Hint: Use a for-loop or recursion.

function factorial(n) {
  if (n === 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// call function
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));
