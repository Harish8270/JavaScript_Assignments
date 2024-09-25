var users = ["john", "raju", "sam", "albert", "mary", "noel", "sam"];

// Using Set to remove duplicates
var uniqueUsers = [...new Set(users)];

console.log(`Unique users = `, uniqueUsers);

//using filter and indexOf() to remove duplicates
var users = ["john", "raju", "sam", "albert", "mary", "noel", "sam"];

var uniqueUsers = users.filter((item, index) => users.indexOf(item) === index);

console.log(`Unique users = `, uniqueUsers);