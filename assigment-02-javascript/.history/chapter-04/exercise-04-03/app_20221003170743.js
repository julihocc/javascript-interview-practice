function MyNumber() {
    constructor = (initialNumber) => {
        assert(typeof initialNumber === "number");
        this.value = initialNumber;
    };
    this.totalkmsDriven = () => kms;
}

let car_object = new carDetails();
car_object.speedUp(7);
car_object.speedUp(9);
console.log(car_object.totalkmsDriven());

// Undefined, since it is made private:
console.log(car_object.kms);
