function reverseString(str) {
    let reversed = "";
    //the last character is at index str.length-1 because string index starts from 0
    // i-- makes sure i is decreased by 1 as it loops through backwards.
    for(let i = str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;

}
console.log(reverseString("Foods"));



// function to count the number of characters in a string.
function countChar(str) {
    let noc = 0;
    for(let i =0; i<str.length; i++){
        noc++
    }  
    return noc;
}

console.log(countChar("Books"));

// function to capitalize the first letter of the word in a sentence
function capitalize(str) {
   let sentence = ""
    
}


// ARRAY FUNCTIONS

// function to find the minimum and maximum values in an array of numbers.
function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i]< min){
            min = arr[i];
        }
    }
    return [min, max];
    
}
console.log(minMax([5, 8, 1, 10, 3]));

// function to calculate the sum of elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;

}

// function to filter out elements from an array based on a given condition
function filterArr(arr, predicate){
   for (let el of arr) {
        if (predicate(el)) {
            result.push(el);
        }
    }
    return result;
}


// 7. Factorial
function factorial(n) {
    if (n < 0) return null; // undefined for negative
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 8. Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// 9. Fibonacci Sequence (generate up to a number of terms)
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



