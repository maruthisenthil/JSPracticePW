let a = 100;
let b = 200;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


let x='Hello';
let y='plywright';

console.log(x+y); // + concatenation 

console.log(a+b+x+y); // 300helloplaywright
console.log(x+y+a+b); // helloplaywright100200

console.log(x+y+(a+b)); // helloplaywright300

console.log(a+b+x+y+a+b); // 300helloplaywright100200

console.log(a+b+x+y+(a+b)); // 300helloplaywright300

console.log('the vlaie of a is '+ a ); //100
console.log('the vlaie of a is '+ b ); //200
console.log('Sum is:  '+ (a+b) ); //300

console.log(true+'hello'+false); // truehellofalse
console.log(12.33+12.44+x+y+a+b);// 24.77Helloplywright100200
