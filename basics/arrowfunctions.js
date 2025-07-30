// => arow function -- no function name --> also called the anonymous function
// arrow functions means return with the arrow => 
// also called no function name
// also called as anonymous function

let print = ()=>{
    console.log('hello world');
}

print();

let say = ()=> console.log('hello');

say();

console.log('======================');

// arow function with one param we can also use ()
let val = (num)=> num % 2 === 0;
let even = val(10); console.log(even);
console.log('======================');
// arow function with one param no need to use ()
let pop = number => number * 2;
let r1 = pop(100);
console.log(r1);

console.log('======================');
// arrow function with two param 

let sub = (a,b) => a-b;
let subResult = sub(10,2);
console.log(subResult);

console.log('======================');

let bye = e =>console.log(e);
bye('naveen');
console.log('======================');


// let openBrowser = browserName => console.log(browserName);
// let flag = openBrowser('chrome');
// console.log(flag);

console.log('======================');

let checkEnv = (envName, browserVersion)=>{
    console.log(envName);
    console.log(browserVersion);
    return 0;
}
let n = checkEnv('QA', 123.11);
console.log(n);
