// fucntion expression

let testingFuncExp = function getTrainer(){
    console.log('get the trainer details');
}
testingFuncExp(); // correct 
// testingFuncExp - // External Name of the function 
// getTrainer(); // Internal name of the function 
console.log(testingFuncExp.name);

// function exp with params - Function exp cannot be hoisted 



let add = function addingTwoNum(a,b){
    let sum = a+b;
    return sum;
}
let s1 = add(25,75);
console.log(s1);
console.log(add.name);
console.log("----------------------------------");
/**
 * @param {string } browserName
 */
let launchBrowser = function openBrowser(browserName){

    console.log("BrowserName" + browserName);

    switch (browserName.trim().toLowerCase) {
        case 'chrome':
            console.log('chrome is launched');
            break;
        case 'firrefox':
            console.log('chrome is launched');
            break;

        default:
            console.log('invalid browser');
            break;
    }
}

if(launchBrowser('chrome')){
    console.log('enter url');
}else{
    console.log('no need to send URL');
}