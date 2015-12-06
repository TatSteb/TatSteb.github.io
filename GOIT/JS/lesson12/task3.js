/**
 �������� ������� throttle(f, ms) � �����������, ������� ���������� ������, ���������� ����� f �� ����,
 ��� ��� � ms �����������.
 � ���� ������� ������ ���� ������ ������������ ������� �� debounce: ���� ������������ ����� �������� ���������,
 �.�. ����� ���� �� ��������� �������� ������ ��� � �� �� ����������.
 ����� ����� ������, ������ ������� ��� ����������, � ��� throttle ������ �������� � ������� �������� ����������,
 �� ������� � ������������� ��� ������.
 ��������, ����� ������������ ������������ ����.
 � JavaScript ��� �������� ��������, ������� ����� ����������� ��� ������ �����-������������ ���� � ��������
 ���������� �������. �� ���� ����, ��� ���� ���������, ��� ������� ����� ����������� ����� �����, ����� ����
 100 ��� � ������� (������ 10��).
 ������� ��������� ������������ ������ ��������� ����� ���������� �� ��������.
 ��� ���� ���������� � ������� ������� �������, ����� ������ ��� ��� ������ �����-������������. ����� �����
 ������ ��� ��� � 100��, �� ����.
 ����� �������, ������� ������������ ��� ���������� �� ������������, ���������� onmousemove.
 ����� throttle(onmousemove, 100), �� ����, ������������ ��� ����, ����� ���������������� ��������� onmousemove.
 ����������, �� ������ ���������� ������, ������� ������� ��� ������ onmousemove, �� �� ���� ��� ��� � 100��.
 ��� ���� ������������� �������� ����� ������������, �� ���� � ����� ������ ���-�� �����������. � ��� ���������,
 �������� ��������� ���� ����������� ����� ����������!
 ��������� ��� ���� ��������� ������� ��������� ����������� ����:
 ������ ���������� ��������� ����� (��� �����, ���������� ��� �� ����� ������� �� ��� ��������).
 ������ ����� ���� ����� ������� (�����-������������) � ������� ������������, �� ���� �� ������ 100�� � ������ �� �����.
 �� ��������� 100�� � ����� ����������, � ���������� ������������. ������������� �����-������������ ������������.
 � ����� ������ ���� ���-�� �����������, ���������� �� ��������� ��������� ����� 100�� ��������� � ���������� ������������.
 ��� ��� ������� � ������ �� �������� �����, � � ��� ������������� �����, ��� ��������� ������������ ��������������.
 ������������ ������ �������, ��� ��������� ����.

 ���� ������ ���� �������:
 ��������� throttle ���������� �������-������ wrapper, ������� ��� ������ ������ ��������� func � ��������� �
 ��������� ������� (isThrottled = true).
 � ���� ��������� ��� ����� ������ ������������ � ��������� ����� savedArgs/savedThis. ������� ��������, ��� �
 �������� ������ � ��������� ��� ��� ��������� ����� � ������������ ������������. ������ ���� � �� � ������,
 ����� ������������� ����� ���������.
 �����, ����� ������ ������� ms ����������� � ����� ����� �����, � wrapper � ������� � ���������� ����������� �
 ���������� (���� �� ����� ����� ���� ������).
 ��� (3) ��������� ������ �� ���� �������, � ����� wrapper, ��� ��� ���������� �� ������ ��������� func, �� � �����
 ��������� ���������� �� �����. ���������� ������������������ ������ � �����.. ����� � ����� .. ����� � ����� �",
 ������ ���������� � ������������ ������� �������������� ������ ����� ����. ��� ������ ����������� ���������.
 */

function throttle(func, ms) {
    var isThrottled = false, savedArgs, savedThis;
    function wrapper() {
        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments); // (1)
        isThrottled = true;
        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
