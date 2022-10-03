const myMath = {

    add: function(...arr) {
        const temp = arr.reduce( (acc,x) => {
           return acc + x
        }, 0);

        return temp
    }
}

const a = myMath.add(1,2,3);
console.log(a)

