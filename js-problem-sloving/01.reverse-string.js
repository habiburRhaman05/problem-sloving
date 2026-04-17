// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.

// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
// Hint: Look into built-in string slicing or a simple loop.

function reverseString(s){
    let output = "";
    let lastIndex = s.length - 1;

    if (s.length === 0) return "empty string is not allow";
    if (s.length === 1) return s
    if (s.length > 1000) return "this text is too long";

         for (let index = lastIndex; index >= 0; index--) {
      output += s[index]
    }
    return output
}

console.log(reverseString("hello"));
