/**
 ���������� ������������ ����������
 ���� ������� sum, ������� ��������� ��� �������� �������:
 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
 �������� ����������� ������� sumArgs(), ������� ����� ����������� ��� ���� ���������:
 function sumArgs() {
  / ..��� ���.. /
}
alert( sumArgs(1, 2, 3) ); // 6, ��������� �������� ����� �������, ��� �������
��� ������� ��������� ����� reduce � arguments, ��������� call, apply ��� ����������� ������.
    P.S. ������� sum ��� �� �����������, ��� ��������� � �������� ������� ������������� reduce ��� ������� ������.
 */

function sumArgs() {
    var args = [].slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    });
}
console.log( sumArgs(1, 2, 3) ); // 6, ��������� �������� ����� �������, ��� �������