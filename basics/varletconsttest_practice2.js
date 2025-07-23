// var
var x =10;
var x = 20;
console.log(x);

// let 

// let y = 'senthil'; // Cannot redeclare block-scoped variable 'y'.
// let y = 'bairava';

// let aa = 30; // Cannot redeclare block-scoped variable 'aa'.ts(2451) let aa: number
// let aa = 40;

// const 
// const z = 40;
// z = 60; // TypeError: Assignment to constant variable.
//console.log(z); // TypeError: Assignment to constant variable.

{
    var a =10;
    let b = 20;
    const c = 30;
}
console.log(a);
// console.log(b); // ReferenceError: b is not defined - block scope:
// console.log(c); // ReferenceError: c is not defined


console.log(p);
var p = 15;  // undefined - Hoisting - only on var
console.log(p); // 15
console.log(q); // ReferenceError: Cannot access 'q' before initialization
let q = 25;