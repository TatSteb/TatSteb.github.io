/**
 �������� ���, ������� ����������� ������ �������� people �� ���� age.
 ��������:
 var vasya = { name: '����', age: 23 };
 var masha = { name: '����', age: 18 };
 var vovochka = { name: '�������', age: 6 };
 var people = [ vasya , masha , vovochka ];
 ... ��� ��� ...
 // ������ people: [vovochka, masha, vasya]
 console.log(people[0].age) // 6

 �������� ������ ��� � ������� ����� ����������.
 */

var vasya = { name: '����', age: 23 };
var masha = { name: '����', age: 18 };
var vovochka = { name: '�������', age: 6 };
var people = [ vasya , masha , vovochka ];

people.sort(function(a, b) { return a.age - b.age; });
console.log(people);    // ������ people: [vovochka, masha, vasya]
console.log(people[0].age); // 6