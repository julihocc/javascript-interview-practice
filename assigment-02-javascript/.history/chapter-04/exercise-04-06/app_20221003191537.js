const x = [1,2];

const numericValidArray = (...arr) => {
    let isNumericalValue = arr.reduce(
        (acc, current) => acc & Number.isFinite(current), true
    ); 
    isNumericalValue = Boolean(isNumericalValue);
    return isNumericalValue & (arr.length===4 or arr.length===6)
}

console.log(numericValidArray(1,2,2,2));