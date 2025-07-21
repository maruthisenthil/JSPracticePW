// creating object using the class: last JS:ES6

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

// create Object of Product using new Keyword: 
// const.. will be called when you create the object

let p1 = new Product('Macbook',1000);
console.log(p1.name);
console.log(p1.price);

// create object without a reference name: 
new Product('iphone', 500);
new Product('samsung',100);

let p2 = new Product('iMac', 300);
console.log(p2);
p2.color='red';
console.log(p2);

// there is no gc method in JS:

//bad practice: 

let prName = new Product('mouse',100).name;
console.log(prName);
let prPrice = new Product('mouse',100).price;
console.log(prPrice);