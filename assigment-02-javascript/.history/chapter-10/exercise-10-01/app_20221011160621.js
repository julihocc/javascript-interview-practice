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
                return math.add(a,-b)
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
            sub: function (a, b) { /*matrix subtraction*/ },
            mul: function (a, b) { /*matrix multiplication*/ },
            eye: function (size) { /*identity matrix*/ },
            dot: function (m, a) { /*dot product*/ },
            times: function (a, b) { /*element-wise multiplication*/ }
        }
    }
};

const answer = myLib.math.real.sub(
    myLib.math.real.add(20, 22),
    myLib.math.real.mul(2, 5)
);
console.log("🚀 ~ file: app.js ~ line 29 ~ answer", answer);

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
const a1 = [[2, 0], [-1, 3]]               // Array
const a2 = [[-2,0], []]
                       // Matrix, [[49, 1], [4, 9]]
// perform calculations with mixed array and matrix input


