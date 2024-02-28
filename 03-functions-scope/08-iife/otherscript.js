(function (){
const user = 'Toqeer';
console.log(user);
const hello = () => console.log('Hello from the iife');
hello();
})();


(function (name){
console.log('Hello ' + name);
})('shawn');