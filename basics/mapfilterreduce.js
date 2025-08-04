let score =[85,92,66,78,45,94,88,89,99];

// get the passing score (score>=70), add 5 numbers as bonus, then calculate the average 

let avg = score.filter(ele=> ele> 70)
     .map(ele => ele +5)
     .reduce((sum, ele) => sum +ele, 0)/score.filter(ele => ele >=70).length;
console.log(avg);

let prices = [25,60,15,80,35,120,45,90];
// 
// get the lower price(price<50), apply 10% discount

let finalPrice = prices.filter(ele=>ele < 50)
       .map(ele => ele * 0.9)
       .reduce((total, ele)=> total + ele, 0);
console.log(finalPrice);



let dict = ['hello','javascript','playwright','git','cypress','WDIO'];


