function myNumber() {
    let value = null;
    this.setValue = (initialNumber) => {
        assert(typeof initialNumber==="number");
        value = initialNumber;
    }
    this.getValue = () 
} 

const n = new myNumber(10);
console.log(n);
console.log(n.getValue());
