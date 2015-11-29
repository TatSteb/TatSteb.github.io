/**
 Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
 Написать метод extractNumber или extractString, который будет возвращать массив.
 var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};
 var ages = [20,30,40];
 var names = ['Ivanov', 'Petrov', 'Sidorov'];
 */
var ages = [], names = [];

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',
    extractNumber: function() {
        for (var item in this) {
            if (!isNaN(parseFloat(obj[item])) && isFinite(obj[item])){ages.push(obj[item])}
        }
        return ages;
    },
    extractString: function() {
        for (var item in this) {
            if (typeof(obj[item])=== "string"){names.push(obj[item])}
        }
        return names;
    }
};

console.log(obj.extractNumber());
console.log(obj.extractString());