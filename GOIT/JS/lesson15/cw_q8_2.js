/**
 Color Ghost
 Create a class Ghost
 Ghost objects are instantiated without any arguments.
 Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
 ghost = new Ghost();
 ghost.color //=> "white" or "yellow" or "purple" or "red"
 c# Ghost ghost = new Gost(); ghost.GetColor(); // => "white" or "yellow" or "purple" or "red"
 */

var Ghost = function() {
    var arr = ["white", "yellow", "purple", "red"];
    this.color = arr[Math.floor(Math.random()*(arr.length))];
};


ghost = new Ghost();
console.log(ghost.color); //=> "white" or "yellow" or "purple" or "red"