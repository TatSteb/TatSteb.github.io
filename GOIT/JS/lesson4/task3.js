/** �������� �������, ������� ��������� �� ���� ������ � ���������� �� ���������� ���� �� ����� �� ��������� 20 ��������.
 ���� ������ ������ 20, �� �������� ������ � ��������� � ����� ������ '...' **/

function trimStr (str, length) {
    if (str.length > length - 1) {
        console.log(str.substring(0,length)+"...");
    }
    else {
        console.log(str);
    }

}

trimStr ("How to earn fast money?", 20);
trimStr ("How to earn fast money?", 10);
trimStr ("How to earn fast money?", 50);