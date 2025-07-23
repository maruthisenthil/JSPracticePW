let user={
    name: 'senthil',
    city:'DPM'
};

let person = {...user};

console.log(person);
console.log(user);

user.city='pune';

console.log(person);
console.log(user);


// ---------

let u1={
    name: 'senthil',
    age: 30
}

let u2=u1;
console.log(u1);
console.log(u2);

u1.name = 'Hari';
console.log(u1);
console.log(u2);
