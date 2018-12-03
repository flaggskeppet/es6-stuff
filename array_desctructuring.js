function foo(){
  return [1,2,3,4,5,6];
}

// Imperative destructuring
/*
var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];
*/

// Declarative destructuring.
// Independen of index
// Gathering the rest
var [
	a,
  b,
  c = 42,
  ...args,
  ] = foo() || [];

console.log(b)



