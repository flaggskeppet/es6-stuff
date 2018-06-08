/*
multi is a higher order function. It returns a function multiplying a provided number with predefined factor
*/
const multi = (factor) => (num) => factor * num;

const double = multi(2)
const triple = multi(3)

console.log(double(5));
console.log(triple(5));