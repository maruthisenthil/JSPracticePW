// AN Obect is collection of Properties : Key-Value Pair
// Key - String 
// Value - Anything 

let user = {
    name:'Senthil',
    age: 30,
    status: 'active',
    isEmployed: true
};

console.log(user.name);
console.log(user);

console.log(user['status']);

// add more prop:
user.city='Dharapuram';
console.log(user.city);

//delete s prop:
console.log(user);
delete user.isEmployed;
console.log(user);

console.log(user.isEmployed); //undefined

if(user.name === 'Senthil'){
    console.log('PASS');
}
user.age= 38;
console.log(user);
console.log("------------");
//Iterating
let car ={
    name: 'bmw',
    price: 40,
    model:'x1',
    color:'red'
};

for(let key in car){
    console.log(key+':'+car[key]);
}

// 
let person ={
    name: 'Tom',
    age: 30
};
person = null; // Anything assinged null is always null value 
console.log(person.name); // TypeError: Cannot read properties of null (reading 'name')