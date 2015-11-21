/**
 ��������� - ��� ������ ������� �������� � ����� ������ ���������. ��������: ����, ���, � ���� ����� �� ���� �����.
 ���������� �������� ������� isPal(string) ������� ���������� true ��� false � ����������� �� ���� �������� �� ������ ����������� ��� ���.
 console.log(isPal('Anna')); // true
 console.log(isPal('� ���� ����� �� ���� �����')); //true
 console.log(isPal('����')); //false
 console.log(isPal('12321')); //true
 console.log(isPal('123212')); //false
 */
function isPal(str) {
    str = str.toLowerCase().split(" ").join("");
    var strrev = str.toLowerCase().split("").reverse().join("");
    if (str === strrev) { return true; } { return false; }
}

console.log(isPal('Anna')); // true
console.log(isPal('� ���� ����� �� ���� �����')); //true
console.log(isPal('����')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
