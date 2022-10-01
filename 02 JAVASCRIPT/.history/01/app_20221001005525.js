"strict mode"

const base13 = {
    "10": "A",
    "11": "B",
    "12": "C",
    apply(x){
        if(x )       
    }
}

const changeBase = (x) => {
    let residuals = [];
    while (x > 0) {
        r = x % 13;
        x = (x-r)/13
        residuals.push(String(r));
    }
    return residuals.reverse()
}

const mul = (x, y) => {
    return x * y
}

const x = 100

console.log(changeBase(100))
console.log(mul(9, 6))