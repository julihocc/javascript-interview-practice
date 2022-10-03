const myMath = {

    add: function(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc + x
        }, 0);
    },

    add: function(...arr) {
        return temp = arr.reduce( (acc,x) => {
           return acc * x
        }, 0);
    }
}

const a = myMath.add(1,2,3);
console.log(a)

const b = myMath.add(1,2,3);
console.log(a)
