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
                return math.add(a, math.multiply(-1, b))
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