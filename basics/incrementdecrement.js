// 1.post increment: ++ 
let a = 1;
let b = a++;
console.log(a);
console.log(b);

let m = -99;
let n = m++
console.log(m); // -98
console.log(n); // -99
//2. pre increment: ++ 
let c =1;
let d = ++c;

console.log(c);
console.log(d);

// 3. post decr 

let p = 3;
let q = p--;
console.log(p);
console.log(q);

let k = -89;
let h = k--;
console.log(k); // -90
console.log(h); // -89

// 4.pre decrement 
let v=2;
let z=--v;
console.log(v); // 1
console.log(z); // 1

let total = 100;
console.log(total++); // 100
console.log(total); // 101

let num = 1000;
console.log(++num); // 1001
console.log(num); // 1001

let st = '5';
console.log(++st); // 6

let tr='5';
console.log(tr--); // 5

// console.log(++'5'); // SyntaxError: Invalid left-hand side expression in prefix operation
// console.log(+'5'++); // SyntaxError: Invalid left-hand side expression in postfix operation