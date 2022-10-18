cont myMath = {

    add(arr) {
        return arr.reduce( (acc,x) => {
            acc + x
        }, 0)
    }
}

const a = myMath