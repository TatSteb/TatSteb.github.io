function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks.push(insertFunction(i));
    }

    function insertFunction(n) {
        return function(){
            return n;
        };
    }

    return callbacks;
}

var callbacks = createFunctions(5);
console.log(callbacks);
console.log(callbacks[0]());
console.log(callbacks[2]());