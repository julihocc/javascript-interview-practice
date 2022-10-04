const x = [1,2];

const numericValidArray = (..arr) => {
    return arr.reduce(
        (acc, current) => acc & Number.isFinite(current), True
    )
}

console.log();