function myNumber() {
    let value = NaN;
    this.setValue = (initialNumber) => {
        if(typeof initialNumber==="number"){
            value = initialNumber;
        }
    }
    this.getValue = () => {
        return value
    }
} 

const n = new myNumber();
n.setValue(10);
console.log(n.getValue());

const n2 = new myNumber();
n2.setValue("10");
console.log(n2);
console.log(n2.getValue());
