/**
 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
 Example string: Web Development Tutorial
 Expected Output: Development
 */

function findTheLongestWord(str) {
    var arr = str.split(" ");
    var index=0;
    var max = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}

console.log(findTheLongestWord("Web Development Tutorial"));
