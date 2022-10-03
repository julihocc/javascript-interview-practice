function myNumber() {
    let value = null;
    this.setValue = (initialNumber) => {
        console.log(initialNumber);
        console.log(typeof initialNumber);
        assert(typeof initialNumber==="number");
        value = initialNumber;
    }
    this.getValue = () => {
        return value
    }
} 

const n = new myNumber();
n.setValue(10);
console.log(n);
console.log(n.getValue());
