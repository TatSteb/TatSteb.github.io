// return a function that returns n

function always (n) {
    return function () {
        return n;
    };
}

var three = always(3);
console.log(three()); // returns 3
