// Check Prime Number
// Task: Determine if a number n is prime (only divisible by 1 and itself).
//
// Input: integer n
// Output: boolean
// Constraints: 1 <= n <= 1000.
// Edge Case: n = 1 (not prime), n = 2 (prime).
// Hint: Check divisibility from 2 up to the square root of n.


function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(isPrime(1));  // false
console.log(isPrime(2));  // true
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
