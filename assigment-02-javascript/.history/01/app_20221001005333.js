"strict mode"

const changeBase = (x, b = 13) => {
    let residuals = [];
    while (x > 0) {
        r = x % b;
        x = (x-r)/b
        residuals.push(String(r));
    }
    return residuals.reverse()
}

const base13 = {
    "10": "A",
    "11": "B",
    "12": "C",
    apply(x)
}

const mul = (x, y) => {
    return x * y
}

const x = 100

console.log(changeBase(100))
console.log(mul(9, 6))