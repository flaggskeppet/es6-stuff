/*
Encapsules a function call inside a scope as an executable command
*/

function createTask(target, args){
  return() => {
  	return target.apply(null, args)
  }
}

let task = createTask(Math.max, [5,6,7]);
console.log(task())
console.log(task())
console.log(task())