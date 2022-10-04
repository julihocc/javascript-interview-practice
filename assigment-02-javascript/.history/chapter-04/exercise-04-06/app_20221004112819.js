const x = [1, 2];

const validNumericalInput = (...arr) => {
    let isNumericalValue = arr.reduce(
        (acc, current) => acc && Number.isFinite(current), true
    );
    // isNumericalValue = Boolean(isNumericalValue);
    return isNumericalValue && (arr.length === 4 || arr.length === 6)
}

// console.log(validNumericalInput(1,2,2,2));


const validArrayInput = (...arrays) => {
    // console.log(arrays);
    if (arrays.length === 2) {
        [arr0, arr1] = arrays;
        // console.log("test 1");        
        // console.log(arr0, arr1);
        if (arr0.length === arr1.length) {
            // console.log("test 2");
            if (arr0.length === 2 || arr0.length === 3) {
                // console.log("test 3");
                return true
            }
        }
    }
    return false

}

console.log(validArrayInput([1, 2], [2, 2]));
console.log(validArrayInput([1, 2], [2, 2, 4]));

const _distance = arr => {
    n = arr.length;
    // console.log(n);
    if (n===4|n===6) {
        quad_distance = 0;
        for(let i=0; i<n/2; i++){
            let xo = arr[i];
            let xf = arr[n/2+i];
            // console.log(xo, xf)
            quad_distance += (xo - xf)**2;
        }
        // console.log(quad_distance);
        return Math.sqrt(quad_distance)
    }
    else {
        throw "Insufficient parameters";
    }
}

const distance = (...args) => {
    if(validNumericalInput(...args)){
        return _distance(args)
    } 
    if{

    }
} 

