function filterRange(arr, a, b){
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

var arr = [1, 2, 3, 10, "jh"];
console.log(filterRange(arr, 0, 2));
console.log(filterRange(arr, 3, 2));
console.log(filterRange(arr, 2, 4));
