// Value are stored on the stack
const name = 'John';
const age = 30;


// Reference values are stored on the heap
const person = {
    name: 'toqeer',
    age: 28
}

let newName = name;
console.log(name, newName); // John John

newName = 'Johnathan';
console.log(name, newName); // John Johnathan

let newPerson = person;
console.log(person, newPerson);

// person = {name: 'toqeer, age:28}
// newPerson = {name: 'toqeer, age:28}


newPerson.name = 'Bradly'
console.log(person, newPerson);
// person = {name: 'Bradly, age:28}
// newPerson = {name: 'Bradly, age:28}
