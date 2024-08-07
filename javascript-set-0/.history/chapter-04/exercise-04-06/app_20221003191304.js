const x = [1,2];

const numericValidArray = (...arr) => {
    return arr.reduce(
        (acc, current) => acc & Number.isFinite(current), true
    )
}

console.log(numericValidArray(1,2,2,2));