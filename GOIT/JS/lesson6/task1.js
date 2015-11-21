/**
 * У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

 var obj = {
  className: 'open menu'
};

 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений

 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

 obj = {
  className: 'my menu menu'
};

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'

 Лишних пробелов после функции образовываться не должно.
 */

obj = {
    className: 'my menu menu'
};

function removeClass(obj, word) {
    var arr = obj["className"].split(" ");
    for (var i = arr.length; i >= 0; i--) {
        if (arr[i] === word) {arr.splice(i, 1)}
    }
    obj["className"] = arr.join(" ")
}

removeClass(obj, 'menu'); // 'my'
removeClass(obj, 'blabla'); // без изменений
console.log(obj);