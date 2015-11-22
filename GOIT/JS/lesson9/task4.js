/**
 —оздайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, котора€ кеширует еЄ результаты.
 ¬ этой задаче функци€ f имеет только один аргумент, и он €вл€етс€ числом.
 ѕри первом вызове обертки с определенным аргументом Ч она вызывает f и запоминает значение.
 ѕри втором и последующих вызовах с тем же аргументом возвращаетс€ запомненное значение.
 ƒолжно работать так:
 function f(x) {
  return Math.random() * x; // random дл€ удобства тестировани€
}
 function makeCaching(f) { / ваш код / }
f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)
b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
 */

function f(x) {
    return Math.random() * x; // random дл€ удобства тестировани€
}

function makeCaching(f) {
    var cache = {};
    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
console.log(a);
console.log(b);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log(a);
console.log(b);
console.log( a == b ); // false, другой аргумент => другое значение