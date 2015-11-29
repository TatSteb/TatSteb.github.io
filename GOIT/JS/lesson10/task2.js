/**
 Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.
 getMaxNumber([1,30,40,2,7]); // 40
 getMaxNumber([1,15,-20,2,-7]); // 15
 */

function getMaxNumber(arr) {
    var maxNumber = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {maxNumber = arr[i]}
    }
    return maxNumber;
}

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15