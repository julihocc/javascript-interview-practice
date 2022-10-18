function MyNumber() {
    constructor = (initialNumber) => {        
        assert(typeof initialNumber === "number");
        this.value = initialNumber;
        this.getValue = () => this.value;
    };
}

const n = MyNumber(10);
console.log(n.getValue());
