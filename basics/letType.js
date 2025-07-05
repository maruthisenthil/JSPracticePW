console.log("==== Let ====");
// let : block scope
let b=20; // global variable
// console.log(b); // 20
let pop = 60;
function rest(){
    // hoisting is not possible for let variable
    // console.log(b);  // ReferenceError: Cannot access 'b' before initialization
    console.log(pop);
    let b = 30;
    console.log(b); // 30
    if(true){
        let b = 40;
        console.log(b) // 40
    }
    console.log(b); // 30
}

// console.log(b); // 20
rest();
console.log("==============");

// console.log(age);
// let age=30;

// redeclaration is not allowed: 

let m=10;
// let m=10; // Cannot redeclare block-scoped variable 'm'
// reassignmnet is allowed:
m=40;
console.log(m);

// console.log(os); // ReferenceError: Cannot access 'os' before initialization
// let os = "windows";

// lang = "javascript"; // not allowed
// i = 10; // ReferenceError: i is not defined
// console.log(i);

let pest;
pest = 100;
console.log(pest); // undefiined 

console.log("==========const..values ==========");

// const t2=10;
// t2=20;
// console.log(t2); // TypeError: Assignment to constant variable.

const days = 7;
const salary = 100;
// days = 10; // TypeError: Assignment to constant variable.
console.log(days * salary);