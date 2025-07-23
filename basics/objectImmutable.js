// freeze vs seal :

let user = {
    name: 'senthil',
    city: 'NY'
}
console.log(typeof(user));

console.log(user);
// like final keyword in java
Object.freeze(user);

// add new property
//user.age=40;
//console.log(user); // TypeError: Cannot add property age, object is not extensible

// user.city='DPM'; // TypeError: Cannot assign to read only property 'city' of object '#<Object>'
// console.log(user);

// delete user.city; // TypeError: Cannot delete property 'city' of #<Object>

// immutable - no add, no delete, no update

//2. seal() - allow some modifications, but wont allow adding/ removing
let user2 ={
    name:'Anu',
    city: 'DPM'
};
console.log(user2);
Object.seal(user2);
user2.city='DPM';
console.log(user2);

// user2.age=10;
//console.log(user2); // ypeError: Cannot add property age, object is not extensible
 
//delete user2.city; // TypeError: Cannot delete property 'city' of #<Object>