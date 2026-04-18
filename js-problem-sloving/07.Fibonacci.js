// Fibonacci Sequence
// Task: Generate the first n numbers of the Fibonacci sequence.
//
// Input: integer n
// Output: int[]
// Constraints: n >= 1.
// Edge Case: n = 1.
// Hint: Start with [0, 1] and add the last two elements to get the next.

function fibonacci(n) {
  if (n <= 0) return []; // return is array emply
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
