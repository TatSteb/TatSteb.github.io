/**
 You are given a complex object that has many deeply nested variables. You don't want to go the usual if
 obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
 var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};
 obj.hash('person.name'); // 'joe'
 obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
 obj.hash('person.history.homeStreet'); // undefined
 obj.hash('person.animal.pet.needNoseAntEater'); // undefined
 */

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

Object.prototype.hash = function(string) {
    var arr = string.split('.');
    var obj1 = obj;
    for (var i = 0; i < arr.length - 1; i++) {
        if (obj1[arr[i]]) {obj1 = obj1[arr[i]]};
    }
    return obj1[arr[arr.length - 1]];
}

//console.log(obj.person['name']); // 'joe'
console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined