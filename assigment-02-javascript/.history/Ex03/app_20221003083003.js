const myMath = {

    add(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc + x
        }, 0);
    },

    mult(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc * x
        }, 1);
    },

    fact(n) {
        if (Number.isInteger(n) & n)
    }
}

const a = myMath.add(1,2,3);
console.log(a)

const b = myMath.mult(1,2,3, 4);
console.log(b)
