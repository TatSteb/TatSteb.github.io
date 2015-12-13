/**
 Из внешнего кода мы хотели бы иметь возможность понять — запущена кофеварка или нет.
 Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true,
 если она запущена и false, если нет.
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
    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };
    this.run = function() {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);
console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
coffeeMachine.setOnReady(function() {
    console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
