/**
 Write a JavaScript function which accepts an argument and returns the type.
 Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

function getType(arg) {
    return typeof arg;
}

console.log(getType(null));
console.log(getType('text'));
console.log(getType(2));
console.log(getType(true));
console.log(getType(this.arguments));
console.log(getType(Array));

