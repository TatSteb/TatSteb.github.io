/**  Напишите код который выведет сотрудника который выполнил больше всех задач. **/

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var counter = 1;
var hardWorker;
for (var item in tasksCompleted) {
    if (counter===1) {hardWorker = item}
    else {
        if(tasksCompleted[item] > tasksCompleted[hardWorker]) {hardWorker = item}
    }
    counter = ++counter;
}

console.log(hardWorker);