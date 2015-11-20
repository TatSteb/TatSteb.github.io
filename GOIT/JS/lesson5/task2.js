/**
 * Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все
 * числовые значения у свойств умножены на 2.
 */

var image = {
    width: 100,
    height: 400,
    title: 'Cool image',
    four: null
};

function multiplyNumeric(obj) {
    for (var item in obj) {
        if (isNumeric(obj[item])) {obj[item] = +obj[item] * 2;}
    }
    return obj;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

multiplyNumeric(image);
console.log(image);