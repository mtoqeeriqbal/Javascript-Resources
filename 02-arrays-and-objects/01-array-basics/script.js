let x;

// Array Literal
const numbers = [12,13,12,45,33,66];
const mixed = [12,13,'apple',45,33,'bnana'];

// Array constructor
const fruits = new Array('Apple', 'Bnana', 'Orange');

x = numbers[0];

x = numbers[0] + numbers[1];

x  = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

fruits[2] = 'pear';
fruits[3] = 'straberry';

fruits[fruits.length] = 'Blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);