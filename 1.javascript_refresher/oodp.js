// const ed = 100;

// const you = ed + 50;

// console.log(you)


// Only attach reference thats why it modifies
const initalUsers = ['john',"trav","jay"]
const currentUsers = initalUsers

currentUsers.push("Ed", "CJ")

console.log(initalUsers)
console.log(currentUsers)


// deep copy usign spread operator
const initalUsers2 = ['john', "trav", "jay"]
const currentUsers2 = [...initalUsers2]

currentUsers2.push("Ed", "CJ")

console.log(initalUsers2)
console.log(currentUsers2)