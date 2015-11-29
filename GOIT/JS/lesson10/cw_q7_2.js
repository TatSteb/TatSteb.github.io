/**
 Given a string, swap the case for each of the letters.
 e.g. CodEwArs --> cODeWaRS
 */

function swap(str){
    var arr = str.split("");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var letter = arr[i];
        if (letter === letter.toUpperCase()) {
            newArr.push(letter.toLowerCase())
        } else {
            newArr.push(letter.toUpperCase())}
    }
    return newArr.join("");
}

console.log(swap("CodEwArs"));