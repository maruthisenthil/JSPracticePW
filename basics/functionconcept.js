// named fucntion: reusable code/factory

// 1. simple function: no input no return 

function senthil() {
    console.log("Hello senthil");
}
// call the fuction
senthil();


function sum(){
    console.log('sum fucntion');
    let a = 10 + 20;
    console.log(a);
}

sum();
//---

// function hoisting
rest();
function rest(){
console.log('im resting');
}

// 2. function: some input but no return: 
add(10,20); // call by value / arguments
function add(a,b){ // parameter
    console.log("adding two numbers");
    let c = a+b;
    console.log(c);
}


/**
 * 
 * @param {String} name 
 */

function getTrinerName(name){
    console.log('my trainer name is '+name);
    console.log(name.toUpperCase());
}

getTrinerName('Naveen')


// 3. function : some input and some return: 
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function addition(a,b){
console.log('sum of 2 numbers');
let sum = a+b;
return sum;
}

console.log(addition(200,150));

let s = addition(20,30); // right way
console.log(s);

if(s>= 50){
    console.log('PASS');
}


// Acceptence Criteria: create a function wil take a paraeter
// param: browserName: chrome/firefox/edge/safari
// true: if browser is available
// false: if browser not available  and print in valid browser

/**
 * 
 * @param {string} browserName 
 */
function launchBrowser(browserName){
    console.log('broser name is :'+browserName);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
            // break; - return and break cannot be in the same funcion
        case 'firefox':
            console.log('firefox is launched');
            return true;
        case 'edge':
            console.log('edge is launched');
            return true;
        case 'safari':
            console.log('safari is launched');
            return true;
        default:
            console.log('invalid browser : '+browserName);
            return false;
    }
}

let isBrowserLaunched = launchBrowser('chromE ');
console.log(isBrowserLaunched);

if(isBrowserLaunched){
    console.log('enter the url');
}else{
    console.log('check the browser settings');
}
