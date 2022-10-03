function MyNumber() {
    constructor = (initialNumber) => {        
        assert(typeof initialNumber === "number");
        this.value = initialNumber;
        this.getValue = () => this.value;
    };
}

const n = new MyNumber(10);
console.log(n);
console.log(n.getValue());
