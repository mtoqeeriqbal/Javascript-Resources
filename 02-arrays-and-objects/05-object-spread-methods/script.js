let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = true;

x = todo;

const person = {
    address: {
        coords: {
            lat: 23.44,
            lng: -34.56,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;



const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup Call'},
    {id:3, name: 'Go to school'},
    {id:4, name: 'take out trash'},
]

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = Object.hasOwnProperty('name');


console.log(x);