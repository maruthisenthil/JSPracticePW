var a = 10; // global variable 
// scope : function scope
function test(){
    var a = 20; 
    console.log(a); // 20
    if(true){
        var a =30;
        console.log(a); // 30
    }
    console.log(a); // 30
}

test();
console.log(a); // 10

// redeclaration is allowed. 

var t = 10;
var t = 20;

console.log("====");

var browser="chrome";
var browser="firefox";

var aa=10;
aa=20;

console.log("====");

// Hoisting
// before declaraing the var you are trying to use the same variable.

console.log(num); // undefined
var num=10;
// console.log(num);

