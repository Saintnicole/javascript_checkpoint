// JAVASCRIPT CHECKPOINT 
// Simple functions for strings, arrays, and math operations.

// STRING FUNCTIONS 

// Reverse a string
function reverseString(str) {
    let reversed = "";
    //the last character is at index str.length-1 because string index starts from 0
    // i-- makes sure i is decreased by 1 as it loops through backwards.
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Foods")); // sdooF

// Count number of characters in a string
function countChar(str) {
    let noc = 0;
    for (let i = 0; i < str.length; i++) {
        noc++;
    }
    return noc;
}
console.log(countChar("Books")); // 5

// Capitalize first letter of each word
function capitalize(sentence) {
    if (!sentence) return "";                 // handle empty input
    // split on spaces, keep empty pieces so multiple spaces are preserved
    return sentence
      .split(" ")
      .map(word => {
        if (word.length === 0) return "";     // preserve multiple spaces
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
}
console.log(capitalize("welcome to javascript coding")); 
// Welcome To Javascript Coding
console.log(capitalize("  multiple   spaces here  ")); 
// "  Multiple   Spaces Here  "


// ========== ARRAY FUNCTIONS ==========

// Find minimum and maximum in an array
function minMax(arr) {
    if (!arr || arr.length === 0) return [undefined, undefined];
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [min, max];
}
console.log(minMax([5, 8, 1, 10, 3])); // [1, 10]

// Sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([2, 4, 6, 8])); // 20

// Filter array by a condition (predicate)
function filterArr(arr, predicate) {
    let result = [];                // initialize result array
    for (let el of arr) {
        if (predicate(el)) {
            result.push(el);
        }
    }
    return result;
}
console.log(filterArr([2, 8, 3, 10, 5], x => x > 5)); // [8, 10]


// ========== MATH FUNCTIONS ==========

// Factorial of a number
function factorial(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120

// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Generate Fibonacci sequence
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let seq = [0, 1];
    while (seq.length < n) {
        let len = seq.length;
        let next = seq[len - 1] + seq[len - 2];
        seq.push(next);
    }
    return seq;
}
console.log(fibonacci(10)); 
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




