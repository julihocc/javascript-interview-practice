const fibonacci = (n) => {
    if(Number.isInteger(n)){
        if(n>=1){
            if(n===1|n===2){
                return 1
            } else {
                return fibonacci(n-1)+fibonacci(n-1)
            }
        }
    }
}

console.log(fibonacci(4));
console.log(fibonacci(9));