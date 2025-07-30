let product = ['macbook','samsung','iphone','sim','keyboard'];

//forEach method 
product.forEach( elemt => {
    console.log(elemt);
    if(elemt === 'sim'){
        console.log('airtel sim');
    }
} );
console.log('===========================');
let flag = product.some(ele => {
    console.log(ele);
    if(ele === 'samsung'){
        console.log('samsumg mobile');
        return true;
    }
    return false;
});

// console.log(flag);