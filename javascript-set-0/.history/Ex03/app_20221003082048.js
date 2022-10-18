cont myMath = {

    add(arr) {
        cont temp = arr.reduce( (acc,x) => {
           return acc + x
        }, 0)
    }
}

const a = myMath.add(1,2,3);
console.log(a)

