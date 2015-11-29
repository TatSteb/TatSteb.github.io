/**
 The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument
 to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array
 Example:
 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
 */

function fibonacci(n) {
    var arr = [];
    for (i = 0; i < n; i++) {
        arr.push((i > 1) ? (arr[i-1] + arr[i-2]) : i)
    }
    return arr;
}

console.log(fibonacci(4));
