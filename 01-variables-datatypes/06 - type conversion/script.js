// change string to number
let amount = '100';
console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

amount = +amount;
console.log(amount, typeof amount);

amount = Number(amount);
console.log(amount, typeof amount);

let floatnumber = '99.5';
floatnumber = parseFloat(floatnumber)
parseInnumber = parseInt(floatnumber);
console.log(floatnumber, typeof floatnumber); // 99.5 number
console.log(parseInnumber, typeof parseInnumber); // 99 number

// change number to string
let ammount = 100;
ammount = ammount.toString();
console.log(ammount, typeof ammount);

ammount = String(ammount);
console.log(ammount, typeof ammount);


// number to boolean
let bnumber = Boolean(1);
console.log(bnumber, typeof bnumber);
