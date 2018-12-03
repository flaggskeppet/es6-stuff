/**********************************************************************
SPREAD OPERATORS EXAMPLES
All examples are immutable
**********************************************************************/
// The result of these operations are identical
const updateArmState = (state, { armState }) => Object.assign({}, state, armState);
const updateArmState = (state, { armState }) => ({ ...state, ...armState });

// Merging two objects with object spread
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj) //{ "foo": "baz", "x": 42, "y": 13 }

// Merging arrays with array spread
let oldState = [1,2,3];
let newState = [...oldState,4];
 
console.log(oldState); // [1,2,3]
console.log(newState); // [1,2,3,4]

// Merging objects with Object Spread and adding a property
let someObject = { foo: 'bar', x: 42 };
let newObject = {...someObject, aProperty: true}
console.log(newObject); // {foo: "bar", x: 42, aProperty: true}

// Changing only one property on an object with object spread
let todo = {text:"foo", author: "jonas", completed: false}
let newObj = {...todo, completed: !todo.completed};
console.log(newObj); // {text: "foo", author: "jonas", completed: true}

//Update element in an array and return result
let oldState = [{ id: 1, title: "foo"}, {id: 2, title: 'bar' }];
let update = {id: 2, title: 'baz' };

let newState = [...oldState.filter(course => course.id !== update.id), update]
console.log(newState)

// Updating a property-object with incoming data
let state = {text:"foo", author: "jonas", numbers: [1,2,3]}
let numbers = [4,5,6];
let newState = {...state, numbers}; // property value shorthand. Same as {...state, numbers: numbers}
// Same as the following object assign:
let newState = Object.assign({}, state, {numbers: numbers});
console.log(newState); // { "text": "foo", "author": "jonas", "numbers": [4, 5, 6]}