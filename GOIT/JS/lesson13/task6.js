/**
 ����� ��������� ��������� � ������� ����� ���� ������ ���������������.
 ��������, ��������� ��� ���� �� ������:
 var coffeeMachine = new CoffeeMachine(10000);
 coffeeMachine.enable();
 coffeeMachine.run();
 coffeeMachine.disable(); // ��������� ������, ������ �� �������
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
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ������, ��� " + capacity);
        }
        waterAmount = amount;
    };
    this.getWaterAmount = function(amount) {
        return waterAmount;
    };
    function onReady() {
        console.log( '���� �����!' );
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
            throw new Error("��������� ���������");
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
coffeeMachine.disable(); // ��������� ������, ������ �� �������