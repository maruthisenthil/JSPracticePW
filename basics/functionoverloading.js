// // function overloading is not possible in JS 

// function login(){
//     console.log('login to app1');
// }

// function loginWithUnamePass(uname,pass){
//     console.log('login with uname and pwd: '+un + pwd);
// }

// function loginWithUnamePassOtp(uname,pass,otp){
//     console.log('login with uname and pwd and otp : '+un + pwd + otp);
// }
// loginWithUnamePassOtp('sen','sen', 988);

// login(); // SyntaxError: Identifier 'login' has already been declared
// login(10); // SyntaxError: Identifier 'login' has already been de
// clared
// In moden ES6 JS it is strictly show the error. 
console.log('-===========================-');



function login(){
    if(arguments.length === 0){
        console.log('default login');
    }else if(arguments.length === 2){
        console.log(`login with 2 param : ${arguments[0]} and ${arguments[1]}`);
    }else if(arguments.length === 3){
        console.log(`login with 3 param : ${arguments[0]} and ${arguments[1]} and ${arguments[2]}`);
    }else{
        console.log('plz supply the right values ');

    }
}

login();
login('admin', 'admin');
login('senthil','sentil',10002);
login(`admin`)
