const myLib = {
    math: {
        real: {
            add: function (a, b) { return a+b },
            sub: function (a, b) { return a-b },
            mul: function (a, b) { return a*b }
        },
        complex: {
            Num: function (real, img) {
                this.real = real,
                this.img = img
            },
            add: function (a, b) { 
                return new myLib.math.complex.Num(a.real+b.real, a.img+b.img)
             },
            sub: function (a, b) {
                return new myLib.math.complex.Num(a.real-b.real, a.img-b.img)
            },
            mul: function (a, b) {
                let x = a.real*;
                let y = ;
                return new myLib.math.complex.Num(x, y)
            }
        },
        matrix: {
            add: function (a, b) { /*matrix addition*/ },
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