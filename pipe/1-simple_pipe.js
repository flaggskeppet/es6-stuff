/*
https://vanslaars.io/post/create-pipe-function/
*/

const inc = (num) => num + 1;
const dbl = (num) => num * 2;
const add = (a, b) => a + b;

// Pipe takes to functions (f and g) and a set of arguments (using the first the 'rest' and the the 'rest' operator)
// It will invoke f with the args and pass it through g.
// A limitation is that a arguments will be recieved by the first function in the pipeline
const pipe = (f, g) => (...args) => g(f(...args));

const incThenDbl = pipe(inc, dbl);
console.log(incThenDbl(2)) // 6

const sumThenDbl = pipe(add, dbl);
console.log(sumThenDbl(4, 2)) // 12
