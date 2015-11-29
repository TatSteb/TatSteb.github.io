/**
 Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
 Example string: webmaster
 Expected Output: abeemrstw
 Assume punctuation and numbers symbols are not included in the passed string.
 */

function sortInAlphabetOrder(str) {
    var arr = str.split("");
    arr.sort(function(a, b) { if ( a > b ) return 1 });
    return arr.join("");
}

console.log(sortInAlphabetOrder("webmaster"));