let user ={
    name: 'Tom',
    age: 30,
    address: {
        city: 'bangalore',
        zip: 31234,
        area: {
            areaname: 'new area'
        }
    }
};

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.area);
console.log(user.address.area.areaname);