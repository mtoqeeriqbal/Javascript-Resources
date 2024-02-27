let x;

const person = {
    name: 'toqeer',
    age: 29,
    isAdmin: true,
    address: {
        street: '123 main st',
        city: 'Boston',
        State: 'MA',
    },
    hobbies: ['music','sports'],
}

x = person.name;
x = person['name'];
x = person['hobbies'];

delete person.age;
person.hasChildren = true;


person.great = function () {
    console.log(`Hello my name is ${this.name}`);
}



console.log(person.great());