// condition ? expressionIfTrue : expressionIfFalse

let age = 10;

let result = age > 18 ? 'Adult' : 'minor';
console.log(result);

let a =10;
a > 5 ? console.log('hi') : console.log('bye');

let browser = 'firefox';

browser === 'chrome' ? console.log('run chrome') : browser === 'firefox' ? console.log('firefox') : console.log('no browser found');

let isLoggedIn = false;
isLoggedIn ? showDashboard() : redirectTologin();

function showDashboard(){
    console.log("");
}

fucntion redirectTologin(){
    console.log("go to login page");
}