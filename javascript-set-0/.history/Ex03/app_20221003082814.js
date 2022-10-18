const myMath = {

    add: function(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc + x
        }, 0);
    },

    mult: function(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc * x
        }, 1);
    }
}

const a = myMath.add(1,2,3);
console.log(a)

const b = myMath.mult(1,2,3, 4);
console.log(b)
