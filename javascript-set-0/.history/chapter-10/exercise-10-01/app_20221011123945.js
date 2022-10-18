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
                return new myLib.math.complex.Num(a.real+b.real, a.img)
             },
            sub: function (a, b) { /*code goes here*/ },
            mul: function (a, b) { /*code goes here*/ }
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

const complex1 = new myLib.math.complex.Num(1, 0);
console.log('complex1.real:', complex1.real)
console.log('complex1.img:', complex1.img)
