/**
 Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
 Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
 console.log(isPal('Anna')); // true
 console.log(isPal('А роза упала на лапу Азора')); //true
 console.log(isPal('Вася')); //false
 console.log(isPal('12321')); //true
 console.log(isPal('123212')); //false
 */
function isPal(str) {
    str = str.toLowerCase().split(" ").join("");
    var strrev = str.toLowerCase().split("").reverse().join("");
    if (str === strrev) { return true; } { return false; }
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
