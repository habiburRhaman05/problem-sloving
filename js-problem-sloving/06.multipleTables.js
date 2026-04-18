// Multiplication Table
// Task: Generate a multiplication table for a number n up to 10.
//
// Input: integer n
// Output: List of strings (e.g., "5 x 1 = 5").
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
// Hint: Use a simple loop from 1 to 10.

function multiplicationTable(n) {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }

  return result;
}

console.log(multiplicationTable(5));
