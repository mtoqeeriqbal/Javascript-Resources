// Function declaration
function addDollarSign(value) {
  return '$' + value;
}
console.log(addDollarSign(100));


// Function Expression
const addPlusSign = function(value){
  return '+' + value;
}

console.log(addPlusSign(100));

// Summary: Hoisting allows you to use functions and variables before their declarations in the code.
// However, it's important to understand the difference in behavior between function declarations 
// and function expressions when it comes to hoisting.
