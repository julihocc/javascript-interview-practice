"strict mode"

const changeBase = (x, b = 13) => {
    let residuals = [];
    while (x > 0) {
        r = x % b;
        d = (x-r)/b
        residuals.push(r);
    }
    return residuals
}

const mul = (x, y) => {
    return x * y
}

const x = 100

console.log(changeBase(100))
console.log(mul(9, 6))