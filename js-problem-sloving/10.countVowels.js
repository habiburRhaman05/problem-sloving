// Count Vowels
// Task: Count how many vowels (a, e, i, o, u) are in a given string.
//
// Input: string s
// Output: integer
// Constraints: s contains English letters and spaces.
// Edge Case: String with no vowels.
// Hint: Iterate through the string and check if each character is in a "vowel" set.

function findVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let iteration  = 0;

  for (let char of s.toLowerCase()) {
    if (vowels.has(char)) {
      iteration;
    }
  }

  return count;
}

// output
console.log(findVowels("bcdfg"));
console.log(findVowels("AEIOU"));
