// filter - reduce

let numbers = [1,2,3,4,5,6,7,8,9,0];
let even = numbers.filter(ele => ele%2===0 );
console.log(even);
let odd = numbers.filter(ele => ele%2===1 );
console.log(odd);


let newnum=numbers.filter(ele => ele>5);
console.log(newnum);

let newnum1=numbers.filter(ele => ele >=3 && ele < 7);
console.log(newnum1);

let links=['help','contact','music','hel0','prime','price'];
// links where length of the links > 4
let newpro = links.filter(ele=>ele.length > 4);
console.log(newpro);

let footer=['amazon help','contact',' amazon music','helo','amazon prime','price'];
let amazonList=footer.filter(ele=>ele.startsWith('amazon'));

console.log(amazonList);

let marks = [85,92,67,95,43,88];

let rangeMarks = marks.filter(ele=>ele >=70);
console.log(rangeMarks);

let negative = [85,-92,67,-95,43,88,20,-30];

let positiveResutl = negative.filter(ele => ele >0);
console.log(positiveResutl);

let positiveResut1 = negative.filter(ele => ele >0).filter(ele=>ele>70);
console.log(positiveResut1);

let footer2=['amazon help','contact',' amazon music','helo','amazon prime','price'];
let footer3 = footer.filter(ele=>ele.startsWith('amazon')).filter(ele=>ele.includes('prime'));
console.log(footer3);
