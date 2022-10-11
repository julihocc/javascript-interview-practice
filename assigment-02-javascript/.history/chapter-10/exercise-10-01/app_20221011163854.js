const math = require('mathjs')

const myLib = {
    math: {
        real: {
            add: function (a, b) { return a+b },
            sub: function (a, b) { return a-b },
            mul: function (a, b) { return a*b }
        },
        complex: {
            // Num: function(real, imag) {
            //     this.real = real,
            //     this.imag = imag
            // }
            Num: function (real, img) {
                return math.complex(real, img)
            },
            add: function (a, b) { 
                // return new myLib.math.complex.Num(a.re+b.re, a.im+b.im)
                return math.add(a,b)
             },
            sub: function (a, b) {
                // return new myLib.math.complex.Num(a.re-b.re, a.im-b.im)
                return math.add(a, math)
            },
            mul: function (a, b) {
                // let x = a.real*b.real-a.img*b.img;
                // let y = a.real*b.img+b.real*a.img;
                // return new myLib.math.complex.Num(x, y)
                return math.multiply(a,b)
            }
        },
        matrix: {
            add: function (a, b) { return math.add(math.matrix(a),math.matrix(b)) },
            sub: function (a, b) { return math.add(
                math.matrix(a), math.multiply(-1, math.matrix(b))
                )},
            mul: function (a, b) { return math.multiply(math.matrix(a),math.matrix(b))},
            eye: function (n) { return math.identity(n)},
            dot: function (b, a) { 
                return math.multiply(
                    math.transpose(math.matrix(b)), math.matrix(a) 
                )
             },
            times: function (a, b) { return math.multiply(math.matrix(a), b) }
        }
    }
};

const e1 = new myLib.math.complex.Num(1, 0);
console.log('e1:', e1)
const e2 = new myLib.math.complex.Num(0, 1);
console.log('e2:', e2)

const v1 = myLib.math.complex.add(e1,e2)
console.log('v1:', v1)

const v2 = myLib.math.complex.sub(e1, e2)
console.log('v2:', v2)

const v3 = myLib.math.complex.mul(e1, e2)
console.log('v3:', v3)

const v4 = myLib.math.complex.mul(e2, e2)
console.log('v4:', v4)

// create an array and a matrix
const a1 = [[1, 2], [3, 4]] 
const a2 = [[0,1], [2, 3]]

const a3 = myLib.math.matrix.add(a1, a2)
console.log('a3:', a3)

const a4 = myLib.math.matrix.sub(a1,a2)
console.log('a4:', a4)

const b1 = [[1],[0]]
console.log('b1:', b1)

const b2 = [[0],[1]]
console.log('b2:', b2)

const b3 = myLib.math.matrix.mul(a1, b1)
console.log('b3:', b3)

const b4 = myLib.math.matrix.mul(a1, b2)
console.log('b4:', b4)

const b5 = myLib.math.matrix.dot(b1, b2)
console.log("🚀 ~ file: app.js ~ line 96 ~ b5", b5)

const ans1 = myLib.math.real.sub(
    myLib.math.real.add(20, 22),
    myLib.math.real.mul(2, 5)
);
console.log("🚀 ~ file: app.js ~ line 96 ~ ans1", ans1)

const eye4 = myLib.math.matrix.eye (4);
console.log('eye4:', eye4)

const scalar2 = new myLib.math.complex.Num ( myLib.math.real.add(5,2), -3)
console.log('scalar2:', scalar2)

const scalar3 = new myLib.math.complex.Num(3,4)
console.log('scalar3:', scalar3)

const scalar1 =  myLib.math.complex.sub( scalar2, scalar3)
console.log('scalar1:', scalar1)

const ans2 = myLib.math.matrix.times(
    eye4, scalar1);
    
console.log("🚀 ~ file: app.js ~ line 107 ~ ans2", ans2)
