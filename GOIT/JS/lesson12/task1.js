/**
 �������� ������� printNumbersInterval(), ������� ��������������� ������� � ������� ����� �� 1 �� 20,
 � ���������� ����� ������� 100��. �� ����, ���� ����� ������ �������� 2000��, � ������� ������� ������
 100�� � ������� ���������� ��������� �����.
 ������� �� ������, ������ �������, ��� ������������:
 P.S. ������� ������ ������������ setInterval.
 */

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

printNumbersInterval();