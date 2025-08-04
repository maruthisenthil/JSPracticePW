let numbers =[1,2,3,4,5];

let Sum =numbers.reduce((total, num)=> total + num, 0 );
console.log(Sum);

let multiply = numbers.reduce((total, num)=> total * num, 1 );
console.log(multiply);

let dict = ['hello','javascript','playwright'];

let newDict = dict.reduce((result,ele)=>result+','+ele);
console.log(newDict);

let marks = [85,92,67,95,43,88];
let avg = marks.reduce((total,num)=> total+num , 0) / marks.length;
console.log(avg);

