/**
 Given an array, find the duplicates in that array, and return a new array of those duplicates.
 Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).

 */

function duplicates(arr) {
    var newArr = [], dupArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        } else {
            if(dupArr.indexOf(arr[i]) === -1) {
                dupArr.push(arr[i]);
            }
        }
    }
    return dupArr;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));
console.log(duplicates([0, 1, 2, 3, 4, 5]));
