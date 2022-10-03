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

const changeBase = (x, b=13, whichBase = base13) => {
    let residuals = [];
    while (x > 0) {
        r = x % b;
        x = (x-r)/b
        residuals.push(whichBase.apply(r));
    }
    return residuals.reverse().join('')
}

const mul = (x, y, b=13, whichBase = base13) => {
    return changeBase( x * y, b=b, 
}

console.log(changeBase(857))
console.log(mul(9, 6))