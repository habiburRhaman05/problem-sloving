// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

// Input: integer n
// Output: Printed lines or a list of strings.
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
// Hint: Use the modulo operator % to check for remainders.


function checkFizzBuzz(n) {
    let output = []
    if (typeof n !== "number" || n < 1 || n > 100) {
        return "Invalid input: n must be between 1 and 100";
    }

    for (let i = 0; i < n; i++) {
        let currentNum = i + 1;
        if ((currentNum % 3) === 0 && (currentNum % 5) === 0) {
            output.push("FizzBuzz")
        } else if ((currentNum % 3) === 0) {
            output.push("Fizz")
        } else if ((currentNum % 5) === 0) {
            output.push("Buzz")
        } else {
            output.push(currentNum.toString())
        }

    }
    return output

}


console.log(checkFizzBuzz(5));
//output =  [ '1', '2', 'Fizz', '4', 'Buzz' ]
