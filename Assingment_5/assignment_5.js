var users = ["john", "raju", "sam", "albert", "mary", "noel"]

console.log(`users = `,users)

var res3 = users.sort(function (a,b) {
    return a.localeCompare(b);
})

console.log(`users = `,res3)