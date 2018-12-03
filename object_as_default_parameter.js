// Initialize function with an object as default parameter. Note the '={}' - new object instantiation
let doSomething = ({foo="bar", baz = 1} = {}) => console.log(foo, baz);

doSomething() // bar 1

// Define a new value for a property in the default parameter object
let foo = "jonas"
doSomething({foo}) // jonas 1