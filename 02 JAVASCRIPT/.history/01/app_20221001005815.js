"strict mode"

const base13 = {
    "10": "A",
    "11": "B",
    "12": "C",
    apply(x){
        if(x < 10){
            return String(x)
        } else {
            return this[String(x)]
        }
    }
}

const changeBase = (x) => {
    let residuals = [];
    while (x > 0) {
        r = x % 13;
        x = (x-r)/13
        residuals.push(base13.apply(r));
    }
    return residuals.reverse().join('')
}

const mul = (x, y) => {
    return x * y
}

const x = 100

console.log(changeBase(857))
console.log(mul(9, 6))