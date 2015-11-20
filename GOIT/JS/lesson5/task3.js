/**
 * Напишите код, который:
 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен.
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