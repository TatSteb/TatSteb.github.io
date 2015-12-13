/**
 �� � ������������ �������, ������� ������������� ����, ��������� �����. ���� �� ������������� ������� �������
 ������� ����� ������ (���� � "Hamster").
 �������-������ ������ ����� ������ food ��� �������� ��� � ����� found, ������� ��������� � ����.
 ���� � ��� �������. ��� �������� ���� �������, ���� ���� ���� � ������-�� ����� ���������� � ������ ����.
 � ��� ����? ��� ���������?
 function Hamster() {}
 Hamster.prototype.food = []; // ������ "�����"
 Hamster.prototype.found = function(something) {
  this.food.push(something);
};
 // ������ ���� ������� � ������ �������
 var speedy = new Hamster();
 var lazy = new Hamster();
 speedy.found("������");
 speedy.found("����");
 alert( speedy.food.length ); // 2
 alert( lazy.food.length ); // 2 (!??)
 */

function Hamster() {
    this.food = [];
}
Hamster.prototype.food = []; // ������ "�����"
Hamster.prototype.found = function(something) {
    this.food.push(something);
};
// ������ ���� ������� � ������ �������
var speedy = new Hamster();
var lazy = new Hamster();
console.log( speedy === lazy ); // false
console.log( speedy.food === lazy.food ); // false
speedy.found("������");
speedy.found("����");
console.log( speedy.food.length ); // 2
console.log( lazy.food.length ); // 2 (!??)