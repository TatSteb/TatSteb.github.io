/**
 * �������� ���, �������:
 ����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
 ����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
 ��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
 ������� ����� ���� �������� ������� ����� ���� ���������.
 */

var arr = [], number = 0, sum = 0;
do  {
    arr.push(+number);
    number = prompt ("Enter a number");

} while ( !isNaN(parseFloat(number)) && isFinite(number) );
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);