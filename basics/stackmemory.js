// function testing(){
//     console.log("Hello");
//     pop();
// }

// function pop(){ // function store in heap but execute in Stack
//     console.log("pop");
//      testing();
// }
// function call 
// testing(); // will be executed in Stack memory
// // pop();
// Execution Stack - Execution is happened inside the stack

// -----

function testing(){
    console.log("Hello");
    pop();
}

function pop(){ // function store in heap but execute in Stack
    console.log("pop");
     rest();
}

function rest(){
    console.log("Rest");
    testing();
}

testing();
