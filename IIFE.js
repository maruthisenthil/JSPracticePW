// IIFE - Immediately Invoked Function Expression - no name (anonymous function)
// this is goesnot support function expression 
// but ican return something expression
// we have to store in a variable if we return something from IIFE.


(function(){
    console.log('start the server');
})();


(function(name){
    console.log('start the server '+name);
})('tomcast');

let newEmployee = (function(empname){
    console.log('employee name is: '+empname);
    return empname.toUpperCase();
})('Senthil');

console.log(newEmployee);