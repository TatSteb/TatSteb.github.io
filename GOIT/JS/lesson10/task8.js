/**
 Имеется массив css классов со старницы.
 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по
 частоте использования (наиболее часто используемые - впереди).
 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */

var arr = ['link', 'footer', 'menu__item', 'menu', 'menu__item', 'header', 'link', 'sidebar', 'link'];
var classesObj = {};
arr.forEach(function(elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});
var result = [];
for (var className in classesObj) {
    result.push(className);
}
result.sort(function(a, b) {
    return classesObj[b] - classesObj[a];
});

console.log(result);
