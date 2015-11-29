/**
 Сделайте то же самое, что в задаче Вывод чисел каждые 100мс, но с использованием рекурсивного
 setTimeout вместо setInterval.
 */

function printNumbersTimeout20_100() {
    var i = 1;
    var timerId = setTimeout(function go() {
        console.log(i);
        if (i < 20) setTimeout(go, 100);
        i++;
    }, 100);
}

// вызов
printNumbersTimeout20_100();