var myLib = {
    math: {
        real: {
            add: function (a, b) { return  },
            sub: function (a, b) { /*code goes here*/ },
            mul: function (a, b) { /*code goes here*/ }
        },
        complex: {
            Num: function (real, img) {/*code goes here*/ },
            add: function (a, b) { /*code goes here*/ },
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

var answer = myLib.math.real.sub(
    myLib.math.real.add(20, 22),
    myLib.math.real.mul(2, 5)
);
console.log("🚀 ~ file: app.js ~ line 29 ~ answer", answer)


