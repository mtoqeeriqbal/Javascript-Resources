const firstName = "Toqeer";
const lastName = "Iqbal";
const age = 29;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: "take out trash",
  user: {
    name: "Toqeer",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure Arrays
const numbers = [23,34,44,55,66,77];

const [first, second, ...rest] = numbers;

console.log(first,second, rest);

