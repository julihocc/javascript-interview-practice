const addRec = (...arr) => {
    if(arr.length===1){
        return arr[0]
    } else {
        return arr[0]
    }
}

const arr = [1, 3, 5, 7];
const sum = addRec(arr);
console.log(sum);