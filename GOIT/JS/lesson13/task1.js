/**
 �������� ��������� ������ ��� ���������� �������� power, ����� ������� ��� ��� ������ �������� ���������.
 �������� ���:
 function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("�������� ������ ���� �������������");
    }
    if (amount > capacity) {
      throw new Error("������ ������ ���� ������, ��� " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}
 ������� ��������, ��� ��������, ����� � �������� power ���� ������, �� ��� ������� � ������ ������.
 ����� ��� ��������, ��� �������� power ����� ������� ���� ��� �������� ��������� � � ���������� � ����� ���������, �� ������ ��������.
 */

function CoffeeMachine(power, capacity) {
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ���� ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    };

}

var CoffeeMachine1 = new CoffeeMachine(1500, 1000);
console.log(CoffeeMachine1.getPower());