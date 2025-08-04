let numbers = [1,2,3,4,5];
let result = numbers.map(ele => ele + 5);

console.log(numbers);
console.log(result);

let myNum = numbers.map(ele => ele * ele);

console.log(myNum);

let words = ['senthil', 'Hari','naveen','mani'];

let upperCase=words.map(ele => ele.toUpperCase());
console.log(upperCase);
// get first letter from word
let firstIndex = words.map(ele => ele[0]);
console.log(firstIndex);
// hello world 
let result1 = words.map(ele=> ele + '!');
console.log(result1);

let links = ['Google',"amazon","flipkart",'price'];
let footerLinks = links.map(ele => 'amazon' + ele);
console.log(footerLinks);
