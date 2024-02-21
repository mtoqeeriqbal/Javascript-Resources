let x;
const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and my age is ' + age;


// Template Literals
x = `Hello my name is ${name} and my age is ${age}`;

// console.log(x);

// String Properties and Method
const s = new String('Hello World');

x = s.length;


// access value by key
x = s[1];

// String prototype
x = s.__proto__;


x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("e");

x = s.substring(0,4);
x = s.substring(7);
x = s.slice(0,5)

x = s.trim(); // remove extra space

x = s.replace('World', 'John');

x = s.includes('World'); // find string

x = s.valueOf();

x = s.split('  ');


console.log(x);

