/**
 Добавить в конструктор Article:
 Подсчёт общего количества созданных объектов.
 Запоминание даты последнего созданного объекта.
 Используйте для этого статические свойства.
 Пусть вызов Article.showStats() выводит то и другое.
 Использование:
 function Article() {
  this.created = new Date();
  // ... ваш код ...
}
 new Article();
 new Article();
 Article.showStats(); // Всего: 2, Последняя: (дата)
 new Article();
 Article.showStats(); // Всего: 3, Последняя: (дата)
 */
var count = 0, lastDate;
function Article() {
    this.created = new Date();
    count++;
    lastDate = this.created;
}
Article.showStats = function () {
    console.log( "Всего: " + count + ", Последняя: " + lastDate );
};

new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)