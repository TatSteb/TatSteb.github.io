/**
 �������� ������� applyAll(func, arg1, arg2...), ������� �������� ������� func � ������������ ���������� ����������.
 ��� ������ ������� func(arg1, arg2...), �� ���� �������� � func ��� ���������, ������� �� �������, � ���������� ���������.
 ��������:
 // ��������� Math.max � ���������� 2, -2, 3
 alert( applyAll(Math.max, 2, -2, 3) ); // 3
 // ��������� Math.min � ���������� 2, -2, 3
 alert( applyAll(Math.min, 2, -2, 3) ); // -2
 ������� ���������� applyAll, �������, ����, ����� �������� � � �� ������ ���������:
 function sum() { // ��������� ���������: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}
 function mul() { // ����������� ���������: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}
 alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
 alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
 */

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}
 // ��������� Math.max � ���������� 2, -2, 3
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
// ��������� Math.min � ���������� 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

function sum() { // ��������� ���������: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
   return a + b;
  });
 }

function mul() { // ����������� ���������: mul(2,3,4) = 24
 return [].reduce.call(arguments, function(a, b) {
  return a * b;
 });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24