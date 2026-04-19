//3.Check for Palindrome
Task: Determine if a word reads the same forward and backward.

//Input: string s
//Output: boolean
//Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
//Edge Case: "racecar" (true) vs "hello" (false).
//Hint: Compare the string with its rever


function isPalindrome(s) {
  let clean = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  let reversed = clean.split("").reverse().join("");

  return clean === reversed;
}

console.log(isPalindrome("12321"))
console.log(isPalindrome("No lemon, no melon"))  

