const {myLib} = require('./myLib')

console.log('myLib:', myLib)
console.log('myLib.math:', myLib.math)

var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22),
    myLib.math.real.mul(2,5));



