function find(arr, value){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

var arr = [1, 2, 3, 10, "jh"];
var value = 5;
console.log(find(arr, value));
value = 3;
console.log(find(arr, value));
value = "jh1";
console.log(find(arr, value));
value = "jh";
console.log(find(arr, value));