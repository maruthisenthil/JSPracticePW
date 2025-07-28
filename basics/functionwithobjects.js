function getProductDetails(productData){ 
    console.log(productData);
    product.price=2000;
}

let product = {
     name: 'macbook pro',
     brand: 'apple',
     available: 'instoke',
     price: 1002
}

getProductDetails(product); // Call by reference 
console.log(product.price);

