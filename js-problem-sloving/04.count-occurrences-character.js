//15. Count Occurrences of a Character
//Task: Given a string and a character, find how many times that character appears in the string.

//Input: string s, char c
//Output: integer
//Constraints: Case-sensitive.
//Edge Case: Character not present in the string.
//Hint: Use a counter variable and loop through the string.

function countOcc(s, c) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
}
console.log(countOcc("hello world", "l")); // 3
console.log(countOcc("javascript", "a"));  // 2
console.log(countOcc("test", "z"));        // 0
