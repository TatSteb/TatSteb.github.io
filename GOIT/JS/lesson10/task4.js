/**
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of
 the string in upper case. Go to the editor
 Example string: the quick brown fox
 Expected Output: The Quick Brown Fox
 */

function setFirstLetterUpperCase(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1)
    }
    return arr.join(" ")
}

console.log(setFirstLetterUpperCase("the quick brown fox"));