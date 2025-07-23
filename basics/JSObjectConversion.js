let Person = {
    name: 'senthil',
    age: 40,
    salary: 34.23,
    isActive: true,
    status: 'pending'
}
console.log(Person);
console.log(typeof(Person));

// js object to JSON [JS Object Notation] : pojo to json
let parsedJson = JSON.stringify(Person);
console.log(parsedJson);

let bookjson = `{
    "id": 302,
    "name": "Java: The Complete Reference",
    "author": "Herbert Schildt",
    "published_year": 2000,
    "book_summary": "Comprehensive guide for learning Java programming with detailed examples and references."
  }`;

  let bookJson = JSON.parse(bookjson);
  console.log(bookJson);
  console.log(typeof(bookJson));
