/**
 �������� ����������� Calculator, ������� ������ ����������� �������-������������.
 ��� ������ ������� �� ���� ������, ������� ����� ������ ���� �� ������.
 ������ ��� ������: ����� calculate(str) ��������� ������, �������� "1 + 2", � ����� �������� �������� ������ �������� ����λ
 (�� ������ ������� ������ ��������), � ���������� ���������. �������� ���� + � ����� -. ������ �������������:
 var calc = new Calculator;
 console.log( calc.calculate('3 + 7') ); // 10
 ������ ��� � �������� ������������ ����� addMethod(name, func), ������� ���� ����������� ����� ��������.
 �� �������� ��� �������� name � ������� �� ���� ���������� func(a, b), ������� ������ � �������������. ��������,
 ������� �������� �������� *, �������� / � �������� � ������� **:
 var powerCalc = new Calculator;
 powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
 powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
 powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});
 var result = powerCalc.calculate('2 ** 3');
 console.log( result ); // 8
 ��������� ������ � ������� �������������� ��������� � ���� ������ �� ���������.
 ����� � �������� ����� �������� �� ���������� ��������. ����� ���� ����� ���� ������.
 ������������� ��������� ������. ����� ��� ������ ���� � ������ ����.
 */

function Calculator () {
    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {
        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](+a, +b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;
console.log( calc.calculate('3 + 7') ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
console.log( powerCalc.calculate('2 * 3'));

powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
console.log( powerCalc.calculate('2 / 3'));

powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});
console.log( powerCalc.calculate('2 ** 3')); //8
