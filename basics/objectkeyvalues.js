let user = {
    name: 'senthil',
    age: 40,
    status: 'active'
}

let userkeys = Object.keys(user);
console.log(userkeys);
console.log(userkeys.length);

let userValues = Object.values(user);
console.log(userValues);
console.log(userValues.length);

let pair = Object.entries(user);
console.log(pair);
console.log(pair.length);

// print the key on the basis of value

for (let e in user) {
    // console.log(user[e]);
    if(user[e] === 'senthil'){
        console.log(e);
    }
}