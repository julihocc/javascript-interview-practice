const {myLib} = require('./myLib')

console.log('myLib:', myLib)
console.log('myLib.math:', myLib.math)

var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22),
    myLib.math.real.mul(2,5));
console.log("🚀 ~ file: app-2.js ~ line 9 ~ answer", answer)

var ans = myLib.math.matrix.times(
    myLib.math.matrix.eye (4),
    myLib.math.complex.sub (
    new myLib.math.complex.Num (
    myLib.math.real.add(5,2),
    -3),
    new myLib.math.complex.Num (3,4)
    )
    );
console.log("🚀 ~ file: app-2.js ~ line 20 ~ ans", ans)



