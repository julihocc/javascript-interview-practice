function myNumber() {
    let value = null;
    this.setValue = (initialNumber) => {
        console.log(initialNumber);
        assert(typeof initialNumber==="number");
        value = initialNumber;
    }
    this.getValue = () => {
        return value
    }
} 

const n = new myNumber(10);
console.log(n);
console.log(n.getValue());
