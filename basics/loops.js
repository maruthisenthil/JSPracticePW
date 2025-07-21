// 1 to 100 printing

// 1.While 
// 2. for 
// do-while

// 4. for... in 
// 5. for.. of 
// 6. forEach 
console.log("----------------------------");
//1. while
console.log("before log: ");
let i = 1;
while(i<=10){
    
    console.log(i);
    // i++;
    if(i==5){
        console.log('bye Sen');
        break;
    }
    ++i;
}

while(true){
    console.log('Welcoem to Automation world senthil: ----');
    break;
}

while(1){
    console.log("Hello senthil");
    break;
}

// let k=1;
// while(true){
//     console.log("object");
// }


console.log("-----------------------");


//2. for
for(let m =1; m<=10; m++){ // section 1 ; section 2; section 3
    console.log(m);
}

console.log("-----------------------");
let n=1; // section 1
for(;n<=5;){ // section 2
    console.log(n);
    n++; // section 3
}

console.log("-----------------------");
for(;;) { // by default it is true 
console.log("Hello Senthil");
break;
}
console.log("after break");


console.log("-----------------------");

for(let s=10; s>=1; s--){
    console.log(s);
}

console.log("-----------------------");
//print all the even numbers bw 1 to 10;
for(let num=1; num<=10; num++){
    if(num % 2===1){
        console.log(num);
    }
}


// use case for while loop : when no.of iterations are not fixed 

// 1. wait for the webelemnt : 0 to 10 seconds 
// 2. wait for the page loading: 5 10 15 20
// 3. web table pagination: 
// 4. infinite page scrolling:
// 5. total number of Links / elements:
// 6. calender handling 
// 7. carousel handling 
// 8. get the data from DB - table:
// 9. Amazon product price - search : 
// 10. progress bar 0 to 100%: tiem taken 
// 11. File Downloading: the time taken to download it
// 12. wait for the dynamic alert/popup/adv
// 13. EOF : End of file.

// use case for - for loop: when no.of iterations are fixed
// 1. drop down with fixed value: month, day, year, country
// 2. excel/csv: 10 rows : 1 to 10
// 3. Array/list: 5: 0 to 4
// 4. flight/movies. bus booking: seats: 120 - 0 to 119
// 5. Menu iteams/ category:
// 6. footer links
// 7. retry login : when login with 3 wrong password gets so my attempt is fixed in this case I will go for FOR
// 
console.log("-----------------------");

let p =1;
do{
    console.log(p);
    p++;
}while(p<=10);

do{
    console.log('check the elemnt'); // execute the block once
}while(false);

let d=1;
do{
    console.log(d);
    d++;
}while(d>=10);