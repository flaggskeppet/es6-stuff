const do1 = (...args) => { // rest parameter. Collects the elements to an array
       console.log('args', args);
}
do1("hej", "på", "dig")


const do2 = (x, y, z) => { }
var args = [0, 1, 2];
do2(...args); // spread. Spreads the array to individual arguments
