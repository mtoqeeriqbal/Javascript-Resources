// In JavaScript, console is indeed an object. It's a predefined object provided by the JavaScript runtime environment (such as web browsers or Node.js) that exposes various methods for interacting with the console.

// As an object, console has several properties and methods that developers can use for logging, debugging, and interacting with the console environment. console.log() is just one of the methods provided by the console object. Other common methods include console.error(), console.warn(), console.info(), console.table(), and more.

// Here's a basic example demonstrating that console is indeed an object:

// Accessing properties of the console object

console.log(console);

// When you execute this code, it will print the console object itself to the console, allowing you to explore its properties and methods.

// In short, console is an object provided by the JavaScript environment, and console.log() is one of the methods available on this object for logging messages to the console.


// Number
console.log(100);

// String
console.log('Hello World!');

// one thing one thing at the same time
console.log(20, 'hello', true);

// Console variable
const x = 100;
console.log(x);

// Using VSCode Extension "JavaScript (ES6) code snippets" type clg and enter

console.error('alert');
console.warn('Warning')
console.table({name: 'Brad', email: 'brad@gamil.com'});


console.group('Group Name');
console.log(100);
console.log('Hello World!');
console.log(20, 'hello', true);
console.groupEnd();


const style = 'padding: 10px; background-color: white; color: green;';
console.log('%cHello World', style);