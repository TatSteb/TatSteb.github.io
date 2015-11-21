/**
 * ���� ������ ����� arr. �������� ������ arrSorted � �� ��� �� ���������, �� ���������������.
 �������� ������ �� ������ ��������.
 var arr = ['HTML', 'JavaScript', 'CSS'];
 // ... ��� ��� ...
 console.log( arrSorted ); // CSS, HTML, JavaScript
 console.log( arr ); // HTML, JavaScript, CSS (��� ���������)
 */

var arr = ['ohrt', '15', 'HTML', 'JavaScript', 'CSS'];

var arrSorted = arr.slice();
arrSorted.sort();
console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (��� ���������)