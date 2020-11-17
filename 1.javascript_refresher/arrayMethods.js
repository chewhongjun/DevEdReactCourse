const users = [
    { name: "Ed", age: 25 },
    { name: "Led Zeppelin", age: 30 },
    { name: "jay", age:24 }
]

const modifiedUsers = users.map(user => user.age)
console.log(modifiedUsers)

const modifiedUsers2 = users.filter( (user) => user.age > 24)
console.log(modifiedUsers2)
