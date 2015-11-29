/**
 Write a single function that can be invoked by either
 sum(2,3); //5
 //or
 sum(2)(3); //5
 */

function sum(a,b) {
    if (b === undefined) {
        return function(b) {
            return a + b;
        };
    } else {
        return a + b;
    }
}

console.log(sum(2,3));
console.log(sum(2)(3));
