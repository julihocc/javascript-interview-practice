const {myLib} = require('./myLib')

console.log('myLib:', myLib)
console.log('myLib.math:', myLib.math.real)

var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22),
    myLib.math.real.mul(2,5));
console.log("🚀 ~ file: app-2.js ~ line 9 ~ answer", answer)





