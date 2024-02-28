// Default params
function registerUser(user){
    if (!user) {
        user = 'Bot';
    }
    return user + ' is registered';
}
console.log(registerUser());

// Rest params
function sum(...numbers){
let total = 0;
for(const num of numbers){
    total += num;
}
return total;
}

console.log(sum(2,2,2,2,2,2,100));


// Objects as params
function loginUser(user){
 return user;
}

const user = {
    id:1,
    name: 'name',
};

console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name: 'Alyan',
}));

// Arrays as params
function userDetails(user1){
    return user1;
}
const user1 = [1,2,3,4,5];
console.log(userDetails(user1));

function getRandom(arr){
    const randonIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randonIndex];
    console.log(item);
}

getRandom([1,2,3,4,5]);
