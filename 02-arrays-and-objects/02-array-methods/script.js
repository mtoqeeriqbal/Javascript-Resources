let x;

const arr = [12,23,4,55,66,77];

arr.push(100);
arr.pop();

arr.unshift(20);
arr.shift();

// arr.reverse();

x = arr.includes(66);
x = arr.indexOf(12);

x = arr.slice(1,4);

x = arr.splice(1, 4)


console.log(x);