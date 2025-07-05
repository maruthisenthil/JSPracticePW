// number 
// size: 8 bytes = 64 bits
let a =10;
let b = 12.33;
let c = 100;
console.log(a); // 10
console.log(typeof(a)); // number
console.log(typeof(b)); // number

// string: 
//size: 2 bytes for each character 
let empname='tech senthil';
let browser = 'chrome';
let lang = 'javascript';
let num = '100';
console.log(typeof(empname)); // string
console.log(empname); // tech senthil
console.log(num);

// boolean 
// size: 4 bytes = 32 bits
let flag = true;
let isActive = false;

console.log(typeof(flag)); // boolean
console.log(flag); // true
console.log(typeof(isActive)); // boolean 

// undefined:
// size: not fixed - depends on the JS engine; may vary from 0 to 4 bytes;
let p;
let q = undefined;
console.log(p); // undefined
console.log(typeof(p)); // undefined

console.log(q); // undefined
console.log(typeof(q)); // undefined

// null
let driver = null;
console.log(driver);
console.log(typeof(driver)); // type of null -- object -- existing in JS

// 
let usernames= '';
console.log(typeof(usernames));


// BigInt 

let testing = 10;
testing = "naveen";
testing =true;
console.log(testing);
console.log(typeof(testing));