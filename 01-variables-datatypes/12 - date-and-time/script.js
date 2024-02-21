let d;
d = new Date();
d = new Date(2021, 0, 10, 12,22,22);
d = new Date('2021-01-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = Date.now();
d = new Date('01-10-2022');
d = d.getTime();
d = d.valueOf();
d = new Date(1641754800000); 
d = Math.floor(Date.now() / 1000);
// console.log(d);


// Date Methods & DateTimeFormat API

let x;
let dd = new Date();

x = dd.toString();
x = dd.getTime();
x = dd.getFullYear();
x = dd.getMonth() + 1;
x = dd.getDate();
x = dd.getDay();
x = dd.getHours();
x = dd.getMinutes();
x = dd.getSeconds();
x = dd.getMilliseconds();
x = `${dd.getFullYear()}/${dd.getMonth()}/${dd.getDate()}`;


x = Intl.DateTimeFormat('en-US').format(dd);
x = Intl.DateTimeFormat('en-GB').format(dd);
x = Intl.DateTimeFormat('default').format(dd);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(dd);
x = dd.toLocaleString('default', {month: 'short'});

x = dd.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
});

console.log(x);
