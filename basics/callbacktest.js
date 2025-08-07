// function getMyDetails(callback){
//     console.log('getting some details ... ');
//     callback('selenium');

// }

// getMyDetails((x) => {
//     console.log(x);
// }); 


function getMarks(callback){
    console.log('geting the marks');
    callback(100);
    return 500;
}

let t1 = getMarks((num)=>{
    console.log(num);
})
console.log(t1);


function openPage(url,callback){
    console.log('url is :'+url);
    callback('Amazon Login page');
    return 'true';
}

let flag = openPage('https://www.amazon.com', (title)=>{
    console.log('geting the page title ...');
    return 'chrome';
});

console.log(flag);


console.log('-------------------------');
setTimeout(()=>{
    console.log('I am paused for 5 seconds');
},5000);
