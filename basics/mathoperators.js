// addition (+)/ concat
console.log(1+1);
console.log(1+'1'); // 11
console.log('1'+'1'); // concat will happen

// - Subtraction
console.log(1-'1'); // convert string to number --> '1' --> 1-->1-1 = 0
console.log('5'-'2'); // 5-2 = 3
console.log('5'-2); // 5-2 = 3

console.log(5-'hello'); // NaN not
console.log('hello'-10); // NaN
console.log('hello'-'senthil'); // NaN

// * Multiplication
console.log(3*3); //9
console.log('2'*3); // 6
console.log(3*'2'); // 6
console.log('senthil'*'automation' - '2'); // NaN

let price =1000;
console.log(price+10); //1010
console.log(price-10); // 990

// division
console.log(10/2); // 5
console.log('12'/2); // 6

console.log('10'/'2'); //5
console.log(9/2); // 4.5
console.log(9/2.0); // 4.5
console.log(9.0/2); //4.5
console.log(9/0); // Infinity
console.log(0/9); // 0
console.log(0/0); // NaN
console.log(0.0/0); // NaN
console.log(0.0/0.0); // NaN

// Modulus % - remainder 

console.log(8%2); // 0
console.log(9%2); // 1
console.log('8'%2); // 0
console.log('9'%'2'); // 1
console.log('800'+'200'); // 800200

// power - exponential: **
console.log(2**3); // 8
console.log(3 ** '2'); //9

// + : unary operator
console.log(+'42'+5); // convert string to number 
console.log(+'800'+ +200); // 1000

// - Unary negation operator 
console.log(-'100'); // -100 - converting the string to negative
console.log(-'hello'); NaN

console.log(+800+200);