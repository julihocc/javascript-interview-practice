const x = [1,2];

const validNumericalInput = (...arr) => {
    let isNumericalValue = arr.reduce(
        (acc, current) => acc && Number.isFinite(current), true
    ); 
    // isNumericalValue = Boolean(isNumericalValue);
    return isNumericalValue && (arr.length===4 || arr.length===6)
}

console.log(validNumericalInput(1,2,2,2));


const validArrayInput = (...arrays) => {
    console.log(arrays);
    if(arrays.length===)
}

console.log(validArrayInput([1,2], [2,2]));