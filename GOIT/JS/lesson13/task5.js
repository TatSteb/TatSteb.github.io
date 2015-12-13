/**
 В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
 В итоге должен работать такой код:
 var coffeeMachine = new CoffeeMachine(10000);
 coffeeMachine.run(); // ошибка, кофеварка выключена!
 А вот так — всё в порядке:
 var coffeeMachine = new CoffeeMachine(10000);
 coffeeMachine.enable();
 coffeeMachine.run(); // ...Кофе готов!
 */

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var timerId;
    this.isRunning = function() {
        return !!timerId;
    };
    var WATER_HEAT_CAPACITY = 4200;
    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }
        waterAmount = amount;
    };
    this.getWaterAmount = function(amount) {
        return waterAmount;
    };
    function onReady() {
        console.log( 'Кофе готов!' );
    }
    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };
    this._enabled = false;
    this.enable = function() {
        this._enabled = true;
    };
    this.disable = function() {
        this._enabled = false;
    };
    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };
}


var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.run(); // ошибка, кофеварка выключена!
var coffeeMachine2 = new CoffeeMachine(100);
coffeeMachine2.enable();
coffeeMachine2.run(); // ...Кофе готов!
