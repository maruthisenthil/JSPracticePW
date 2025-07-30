// a function whihc has no name at all 
// only named function can be hoisted 

let say = function(){
    console.log('Hello tambi');
}
say();


let additionResult =function(a,b){
    return a+b;
}
console.log(additionResult(10,100));

console.log(additionResult.name);


console.log('----------------------');

let isBrowserLaunched = function(browserNames){
    console.log('browser name: '+browserNames);
switch (browserNames.trim().toLowerCase()) {
    case 'chrome':
        console.log('lanch chrome browser');
        break;
    case 'firefox':
        console.log('lanch firefox browser');
        break;
    default:
        break;
}

if(isBrowserLaunched('chrome')){
    console.log('enter the app url');
}

}