/**
 Our counter prototype is broken. Can you spot, what's wrong here?
 */

function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function() {
    this.value++;
};

Counter.prototype.getValue = function() {
    return this.value;
};

Counter.prototype.reset = function() {
    this.value = 0;
};

var Cnt = new Counter();
console.log(Cnt.getValue());
Cnt.increase();
console.log(Cnt.getValue());
Cnt.reset();
console.log(Cnt.getValue());