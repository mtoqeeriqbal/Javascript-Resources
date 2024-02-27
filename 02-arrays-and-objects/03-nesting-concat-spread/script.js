let x;

const fruits = ['apple', 'pear', 'orange']
const barries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(barries);
// x = fruits[3][1]

const allFruits = [fruits, barries];
x = allFruits[1][2];

x = fruits.concat(barries);

// Spread Operator (...)

x = [...fruits, ...barries];


// Flatten Arrays
const arr = [1,2, [2,3] , 5,6,[4,5]];
x = arr.flat();


// Static methods on array Object

x = Array.isArray(fruits);
x = Array.from('121212');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a,b,c);



console.log(x);