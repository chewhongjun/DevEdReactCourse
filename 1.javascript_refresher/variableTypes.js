var user = { name: "Dev Ed" };

/**
 *  Var has a global scope as such in the example below
 *  We still can access the value of i, 10 
 *  Which in most other language will return an error
 */
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log(`This is i ${i}`)

/**
 * The final line  returns an error
 * Which is expected of normal variable
 * Let data type is scope within in {}
 */
for (let j = 0; j < 10; j++){
    console.log(j)
}

// console.log(`This is i ${j}`)


/**
 *  This also throws an error as var is 
 *  has a block Scope {}
 */
function sayHello() {
    var name = "HongJun"
    console.log(name)
}

// console.log(name)
sayHello()


/**
 *   Const: constant variable immutable cannot be changed
 *   Methods can still be applied to a const variable
 */


