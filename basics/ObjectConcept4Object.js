let user1 = {
    name: 'Senthil',
    age: 40,
    status:'active'
};

let user2 = {
    name: 'Bairava',
    age: 10,
    status:'active'
};

let user3 = {
    name: 'anu',
    age: 30,
    status:'inactive'
};

let user4 = {
    name: 'AllGood',
    age: 100,
    status:'active'
};

// 
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log("----------------user1 = user2;-----------------------");
user1 = user2;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log("----------------user2 = user3;-----------------------");
user2 = user3;   //user2 points to the current position of user3
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log("----------------user3 = user4;-----------------------");
user3 = user4;   //user3 points to the current position of user4
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log("----------------user4 = user1;-----------------------");
user4 = user1;   //user3 points to the current position of user4
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
