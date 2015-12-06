/**
 Когда кофеварку выключают — текущая варка кофе должна останавливаться.
 Например, следующий код кофе не сварит:
 var coffeeMachine = new CoffeeMachine(10000);
 coffeeMachine.enable();
 coffeeMachine.run();
 coffeeMachine.disable(); // остановит работу, ничего не выведет
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
        clearTimeout(timerId);
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

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
